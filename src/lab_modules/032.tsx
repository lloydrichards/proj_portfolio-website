import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import * as E from "fp-ts/lib/Either";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";

import { pipe, flow } from "fp-ts/lib/function";

const double = (n: number): number => n * 2;
const square = (n: number): number => n * n;
const inc = (n: number): number => n + 1;

/**
 * Array
 **/

const doubleSquareAndInc = pipe(
  [1, 2, 3, 4, 5],
  A.map(double), // apply the double function
  A.map(inc), // apply the inc function
  A.map(square), // apply the square function
);

console.log(doubleSquareAndInc); // Output: [ 4, 9, 16, 25, 36 ]

/**
 * Option
 **/

// Map over the right value
const maybeNumber: O.Option<number> = O.some(3);

const resultO = pipe(
  maybeNumber, // start with an Option<number>
  O.map(double), // apply double function
  O.map(square), // apply square function
);

console.log(resultO); // Output: Some(36)

/**
 * Either
 **/

const divide = (x: number, y: number): E.Either<string, number> =>
  pipe(
    y,
    E.fromPredicate(
      (y) => y != 0,
      () => "Division by zero",
    ),
    E.map((y) => x / y),
  );

const squareRoot = (x: number): E.Either<string, number> =>
  pipe(
    x,
    E.fromPredicate(
      (x) => x > 0,
      () => "Cannot calculate square root of a negative number",
    ),
    E.map((x) => Math.sqrt(x)),
  );

const calculate = flow(
  divide, // Start with an Either<string, number>
  E.chain((value) => squareRoot(value)), // Apply squareRoot function
);

console.log(calculate(10, 2)); // Output: Right(2.5)

/**
 * Task
 **/

const alwaysResolve: T.Task<number> = () => Promise.resolve(42);

const response = pipe(
  alwaysResolve,
  T.map((n) => "The answer is " + n),
);

console.log(response().then((d) => d)); // Output: "The answer is 42"

/**
 * TaskEither
 **/

const fetchData = (url: string) =>
  TE.tryCatch(
    () => fetch(url).then((res) => res.text()),
    (e) => `Error fetching data, ${String(e)}`,
  );
const parse = (str: string) =>
  TE.tryCatch(
    () => JSON.parse(str),
    (e) => `Error parsing data, ${String(e)}`,
  );
const stringify = (obj: unknown) =>
  TE.tryCatch(
    async () => JSON.stringify(obj),
    (e) => `Error stringify-ing data, ${String(e)}`,
  );

const getJson = pipe(
  fetchData("https://example.com"), // try to fetch data or return error message
  TE.chain(parse), // if successful, parse the data or return error message
  TE.chain(stringify), // if successful, stringify the data or return error message
);

console.log(getJson().then((e) => e)); // Output: Right("{\"foo\":\"bar\"}")

/**
 * pipe and flow
 **/

const doubleSquarePipe = (input: number) =>
  pipe(
    input,
    double, // apply double function
    square, // apply square function
  );

const doubleSquareFlow = flow(
  double, // apply double function
  square, // apply square function
);

console.log(doubleSquarePipe(3)); // Output: 36
console.log(doubleSquareFlow(3)); // Output: 36

/**
 * chain
 **/

const maybeUserId: TE.TaskEither<string, number> = TE.right(3);

const parseUser = pipe(
  maybeUserId, // start with a TaskEither<string, number>
  TE.chain((id) =>
    pipe(
      id,
      double, // apply double function
      TE.fromPredicate(
        (n) => n > 0,
        () => "Number is not positive",
      ),
      TE.map((id) => ({
        id,
        name: "John Doe",
      })),
    ),
  ),
); // apply the getUser function

console.log(parseUser()); // Output: Right({ id: 6, name: 'John Doe' })

/**
 * match
 **/

const maybeNumber2: O.Option<number> = O.some(3);

const resultO2 = pipe(
  maybeNumber2, // start with an Option<number>
  O.map(double), // apply double function
  O.map(square), // apply square function
  O.match(
    () => "No number",
    (n) => "The result is " + n,
  ),
);
const resultO3 = pipe(
  maybeNumber2, // start with an Option<number>
  O.map(double), // apply double function
  O.map(square), // apply square function
  O.matchW(
    () => ({ status: "error", error: "No number" }),
    (n) => ({ status: "ok", data: n }),
  ),
);

console.log(resultO2); // Output: "The result is 36"
console.log(resultO3); // Output: { status: 'ok', data: 36 }
