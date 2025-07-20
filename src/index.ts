

type name = {
  firstName: string;
  lastName: string;
};

type age = {
  age: number;
};

type people = name & age;

const person: people = {
  firstName: "Jean",
  lastName: "Claude",
  age: 28,
};


