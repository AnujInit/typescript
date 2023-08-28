export {};

//any:
let queryResult: any = 5; //disable Type check
queryResult = '5';
queryResult = [5];

function getSalaryFromExternalServiceWithAnyReturnType(empId: number) {
  return JSON.parse('5');
}
let salaryWithAny = getSalaryFromExternalServiceWithAnyReturnType(123);
//salaryWithAny.ddd  --> never show compile time error

//unknown:
function getSalaryFromExternalServiceWithUnknownReturnType(
  empId: number
): unknown {
  return JSON.parse('5');
}
let salaryWithUnknown = getSalaryFromExternalServiceWithUnknownReturnType(123);
//salaryWithUnknown.ddd --> detect as error at compile time

//*** unknown will force us to use to do something called type narrowing. ***
if (typeof salaryWithUnknown === 'number') {
  //type narrowing
  salaryWithUnknown++;
}
if (typeof salaryWithUnknown === 'string') {
  //type narrowing
  salaryWithUnknown.includes('$');
}
if (
  typeof salaryWithUnknown === 'number' ||
  typeof salaryWithUnknown === 'string'
) {
  //type narrowing
  salaryWithUnknown.valueOf();
}
if (
  salaryWithUnknown &&
  typeof salaryWithUnknown === 'object' &&
  'history' in salaryWithUnknown &&
  Array.isArray(salaryWithUnknown.history)
) {
  salaryWithUnknown.history.push(2000);
}

/**
 * WHEN TO USE any?
 *   - Start of JS to TS migration
 *   - Inside unit tests
 */
