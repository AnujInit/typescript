//JS types:
let firstName = 'John';
let isAdmin = false;
let age = 30;

let duties = ['write code', 'fix bugs'];

let car = null;
let bicycle = undefined;

let work = () => console.log('working...');

let salary = 50n;

//This is a symbol which is a value guaranteed to be unique.
let logo = Symbol('emerald');

let all = [firstName, isAdmin, age, car, bicycle, duties, work, salary, logo];

for (const item of all) {
  console.log(`${String(item)} is ${typeof item}`);
}

/**
 * TS Types:
 * any
 * unknown
 * never
 * arrays
 * tuples
 * Enums
 */
