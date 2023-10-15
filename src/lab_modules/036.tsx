import * as Ap from "fp-ts/lib/Apply";
import * as A from "fp-ts/lib/Array";
import * as E from "fp-ts/lib/Either";
import * as M from "fp-ts/lib/Monoid";
import * as O from "fp-ts/lib/Option";
import * as Ord from "fp-ts/lib/Ord";
import * as R from "fp-ts/lib/Reader";
import * as RA from "fp-ts/lib/ReadonlyArray";
import * as Re from "fp-ts/lib/Record";
import { pipe } from "fp-ts/lib/function";
import * as N from "fp-ts/lib/number";
import * as S from "fp-ts/lib/string";

/**
 * Apply
 */

const double = (n: number): number => n * 2;
const increment = (n: number): number => n + 1;

const sequenceOptionStruct = Ap.sequenceS(O.Applicative);
const sequenceOptionTuple = Ap.sequenceT(O.Applicative);

const structResult = pipe(
  sequenceOptionStruct({
    a: O.some(1),
    b: O.some(2),
    c: O.some(3),
  }),
  O.map(({ a, b, c }) => a + b + c),
  O.map(increment),
);

const tupleResult = pipe(
  sequenceOptionTuple(O.some(1), O.some(2), O.some(3)),
  O.map(A.map(double)),
);

console.log(structResult); // Output: Some(7)
console.log(tupleResult); // Output: Some([2, 4, 6])

/**
 * Do
 */

const doResult = pipe(
  O.Do,
  O.bind("a", () => O.some(1)),
  O.bind("b", ({ a }) => O.some(increment(a))),
  O.bind("c", ({ b }) => O.some(increment(b))),
  O.map(({ a, b, c }) => a + b + c),
  O.map(increment),
);

console.log(doResult); // Output: Some(7)

/**
 * Reader
 */

interface Config {
  port: number;
  host: string;
}

const getConfig = R.ask<Config>();

// const getPort = (config: Config): number => config.port;
const getPort = pipe(
  getConfig,
  R.map((config) => config.port),
);

const readerResult = pipe(
  O.some({ port: 3000, host: "localhost" }),
  O.map(getPort),
);

console.log(readerResult); // Output: Some(3000)

/**
 * Covariant
 */

const someNumber = O.some(1);

const someNumberResult = pipe(someNumber, O.map(double));

console.log(someNumberResult); // Output: Some(2)

const maybeNumber = E.right<string, number>(1);

const maybeNumberResult = pipe(
  maybeNumber,
  E.bimap(
    (error) => `Not a number ${error}`, // on left side; add error message
    double, // on right side; double the number
  ),
);

console.log(maybeNumberResult); // Output: Right(2)

/**
 * Contravariant
 */

type User = {
  id: number;
  name: string;
};

const sortById = pipe(
  N.Ord, // Ord<number>
  Ord.contramap((user: User) => user.id), // Ord<User>
);

const sortResult = pipe(
  [
    { id: 2, name: "John" },
    { id: 1, name: "Jane" },
  ],
  A.sort(sortById),
  A.map((user) => user.name),
);

console.log(sortResult); // Output: [ 'Jane', 'John' ]

/**
 * Profunctor
 */

type UserProfile = User & {
  email: string;
  verified: boolean;
};

const someUser: UserProfile = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  verified: false,
};

const isEligible = pipe(
  (user: UserProfile) => user.email, // map the input (B -> C)
  R.promap(
    (user: UserProfile) => ({ ...user, email: user.email.toLowerCase() }), // pre-process the input (A -> B)
    (email: string) => /@gmail.com$/.test(email), // post-process the output (C -> D)
  ),
  (x) => x,
  // ^?
);

const isEligibleResult = pipe(someUser, isEligible);

console.log(isEligibleResult); // Output: true

const isVerified = pipe(
  O.fromPredicate((user: UserProfile) => user.verified),
  R.promap(
    (user: UserProfile) => ({ ...user, verified: user.verified === true }),
    E.fromOption(() => "User is not verified"),
  ),
);

const isVerifiedResult = isVerified(someUser);

console.log(isVerifiedResult); // Output: Left("User is not verified")

/**
 * Moniod
 */

type Shape = "Circle" | "Box" | "Pyramid";
type SomeObj = {
  id: number;
  count: number;
  group: Shape;
};
const someObj: SomeObj[] = [
  {
    id: 1,
    count: 2,
    group: "Circle",
  },
  {
    id: 2,
    count: 4,
    group: "Circle",
  },
  {
    id: 3,
    count: 3,
    group: "Box",
  },
  {
    id: 4,
    count: 2,
    group: "Pyramid",
  },
];

const byGroup = pipe(
  S.Ord,
  Ord.contramap((obj: SomeObj) => obj.group),
);

const byCount = pipe(
  N.Ord,
  Ord.contramap((obj: SomeObj) => obj.count),
);

const SomeM = Ord.getMonoid<SomeObj>();
const byBothOrds = M.concatAll(SomeM)([byGroup, byCount]);

const sortSomeObj = pipe(
  someObj,
  A.sort(byBothOrds),
  A.map((obj) => obj.id),
);

console.log(sortSomeObj); // Output: [ 3, 1, 2, 4 ]

const sortByArray = pipe(
  someObj,
  A.sortBy([byGroup, byCount]),
  A.map((obj) => obj.id),
);

console.log(sortByArray); // Output: [ 3, 1, 2, 4 ]

// order by first "Circle" then "Box" then "Pyramid"
const byOrdinal = pipe(
  Ord.fromCompare((a: Shape, b: Shape) =>
    pipe(
      O.Do,
      O.bind("ordinal", () => O.fromNullable(["Circle", "Box", "Pyramid"])),
      O.bind("aIdx", ({ ordinal }) => A.findIndex((x) => x === a)(ordinal)),
      O.bind("bIdx", ({ ordinal }) => A.findIndex((x) => x === b)(ordinal)),
      O.match(
        () => 0,
        ({ aIdx, bIdx }) => N.Ord.compare(aIdx, bIdx),
      ),
    ),
  ),
  Ord.contramap((obj: SomeObj) => obj.group),
);

const sortByOrdinal = pipe(
  someObj,
  A.sort(byOrdinal),
  A.map((obj) => obj.id),
);

console.log(sortByOrdinal); // Output: [ 1, 2, 3, 4 ]
/**
 * ReadonlyArray
 */

const studentsGrades = [
  {
    name: "john",
    age: 21,
    classes: {
      history: {
        grade: 89,
        semester: "spring",
        category: "humanities",
      },
      math: {
        grade: 95,
        semester: "all_year",
        category: "quantitative",
      },
      physics: {
        grade: 81,
        semester: "fall",
        category: "quantitative",
      },
      literature: {
        grade: 77,
        semester: "spring",
        category: "humanities",
      },
    },
  },

  {
    name: "amanda",
    age: 20,
    classes: {
      history: {
        grade: 95,
        semester: "spring",
        category: "humanities",
      },
      math: {
        grade: 99,
        semester: "all_year",
        category: "quantitative",
      },
      physics: {
        grade: 89,
        semester: "fall",
        category: "quantitative",
      },
      literature: {
        grade: 65,
        semester: "spring",
        category: "humanities",
      },
    },
  },

  {
    name: "rachel",
    age: 19,
    classes: {
      history: {
        grade: 80,
        semester: "spring",
        category: "humanities",
      },
      math: {
        grade: 90,
        semester: "all_year",
        category: "quantitative",
      },
      physics: {
        grade: 100,
        semester: "fall",
        category: "quantitative",
      },
      literature: {
        grade: 88,
        semester: "spring",
        category: "humanities",
      },
    },
  },
];

const gradesByCategory = (groupBy: string) =>
  pipe(
    studentsGrades,
    RA.chain(({ classes }) => Object.values(classes)),
    (x) => x,
    //     ^?
    RA.filterMap(({ category, grade }) =>
      category === groupBy ? O.some(grade) : O.none,
    ),
  );

console.log(gradesByCategory("quantitative"));

const groupGrades = pipe(
  studentsGrades,
  RA.reduce({} as Record<string, Array<number>>, (acc, { classes }) => {
    const grades = Object.values(classes);
    return pipe(
      grades,
      RA.reduce(acc, (acc, { category, grade }) => {
        const current = acc[category] ?? [];
        return {
          ...acc,
          [category]: [...current, grade],
        };
      }),
    );
  }),
  (x) => x,
  // ^?
  Re.toEntries,
  (x) => x,
  //     ^?
  A.map<[string, number[]], [string, number]>(([category, grades]) => [
    category,
    pipe(
      grades,
      RA.reduce(0, (acc, grade) => acc + grade),
      (x) => +(x / grades.length).toFixed(2),
    ),
  ]),
  (x) => x,
  //     ^?
  Re.fromEntries,
);

console.log(groupGrades);
