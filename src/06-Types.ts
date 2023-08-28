//Type aliases: define the shape of an object

type Position = 'Programmer' | 'HR';
const myPosition: Position = 'HR'; //Here we only can assign Programmer or HR. otherwise Ts throw compile time error

type Colleague = {
  name: string;
  age: number;
  position: Position;
  greetBack?: Function;
};
