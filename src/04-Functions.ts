function greet(name: string) {
  return 'Hello ' + name;
}
const johnGreet = greet('John');

function greetToUpperCase(name: string) {
  return 'Hello ' + name.toUpperCase();
}
const johnGreetUppercase = greetToUpperCase('John');

function consoleGreetJohn(name = 'John') {
  console.log('Hello ' + name.toUpperCase());
}
consoleGreetJohn();
consoleGreetJohn('Steve');

const greetToConsole = (name: string) => console.log('Hello ' + name);
greetToConsole('Bills');

function greetMultiple(...name: string[]) {
  name.forEach((name) => greetToConsole(name));
}
greetMultiple('Johns');
greetMultiple('Bills', 'John', 'Mary');
