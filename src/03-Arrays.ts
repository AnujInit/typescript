export {};

//Arrays
const duties: string[] = ['write code'];

duties.push('fix bugs');
duties.map((duty) => console.log(duty.toUpperCase()));

//Tuples:
let employeeLockerCode: [string, number] = ['John', 34];
employeeLockerCode = ['5', 6];
employeeLockerCode.push(12);
console.log(employeeLockerCode);
