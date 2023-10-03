import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as E from "fp-ts/lib/Either";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import * as t from "io-ts";
import * as EQ from "io-ts/Eq";
import { pipe, flow } from "fp-ts/lib/function";
import { failure } from "io-ts/PathReporter";
/*
 * DeepEqual of Nested Objects
 */

const Filter = t.type({
  types: t.array(t.string),
  range: t.tuple([t.number, t.number]),
  boolean: t.boolean,
  user: t.type({
    name: t.string,
    id: t.number,
  }),
});
type Filter = t.TypeOf<typeof Filter>;

const FilterEq = EQ.struct<Filter>({
  types: EQ.array(EQ.string),
  range: EQ.tuple(EQ.number, EQ.number),
  boolean: EQ.boolean,
  user: EQ.struct({
    name: EQ.string,
    id: EQ.number,
  }),
});

const isEqual = (a: Filter, b: Filter) => FilterEq.equals(a, b);

const filter1: Filter = {
  types: ["a", "b"],
  range: [1, 2],
  boolean: true,
  user: {
    name: "John",
    id: 1,
  },
};
// console.log(isEqual(filter1, filter1)); // Output: true
// console.log(isEqual(filter1, { ...filter1, user: { name: "Fred", id: 2 } })); // Output: false

/*
 * Elegant IO Layer (Error Handling)
 */

const ApiData = t.type({
  status: t.string,
  value: t.type({
    id: t.number,
    name: t.string,
  }),
});
type ApiData = t.TypeOf<typeof ApiData>;

interface NetworkError {
  type: "NetworkError";
  message: string;
}
interface ParseError {
  type: "ParseError";
  errors: t.Errors;
}
type AppError = NetworkError | ParseError;

const handleErrors = (appError: AppError): T.Task<string> => {
  switch (appError.type) {
    case "NetworkError":
      return T.of(`Network error: ${appError.message}`);
    case "ParseError":
      return pipe(
        appError.errors,
        failure,
        A.head,
        O.getOrElse(() => "Unknown error"),
        T.of,
      );
  }
};

const getFromUrl = (url: string) =>
  pipe(
    TE.tryCatch(
      () => fetch(url),
      (e) => ({ type: "NetworkError", message: String(e) }),
    ),
    TE.chain((x) => TE.of(x.json())),
    TE.mapLeft(({ message }): AppError => ({ type: "NetworkError", message })),
    TE.chain((json) =>
      pipe(
        ApiData.decode(json),
        E.mapLeft((errors): AppError => ({ type: "ParseError", errors })),
        TE.fromEither,
      ),
    ),
    TE.fold(handleErrors, (data) => T.of(data.value.name)),
  );

getFromUrl("https://api.chucknorris.io/jokes/random")().then(console.log); // Output: "Invalid value undefined supplied to : { status: string, value: { id: number, name: string } }/status: string"

/*
 * Branching Render Logic
 */

/*
 * Responsive Values
 */
