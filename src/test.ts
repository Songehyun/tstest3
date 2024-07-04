interface Person {
  name: string;
  age: number;
  greet: () => void;
}

const person: Person = {
  name: "John",
  age: 30,
  greet: () => {
    return "Hello!";
  },
};
