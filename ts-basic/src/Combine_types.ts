// ============= Union ============= 

function unionTypes (param1: string | number) : string | number {
  if (typeof param1 === 'string') {
    console.log(param1.toUpperCase());
  } else {
    console.log(param1);
  }
  return param1
}

unionTypes(2);

// ============= Intersection Types ============= 

type Person2 = {
  name: string
  age: number
}

type Employee = {
  name: string
  salary: number
}

type Difision = {
  JobTitle: string
  Department?: string
  jabatan?: string
}


type Combined = Person & Employee & Difision;

const IntersectionTypes: Combined = {
  name: "Davit",
  age: 24,
  salary: 100000,
  JobTitle: "Developer",
  Department: "IT",
  jabatan: "Manager"
}

function printIntersectionTypes (params: Combined) {
  console.log(`Name is ${params.name} and Age is ${params.age} and Salary is ${params.salary}`);
}

printIntersectionTypes(IntersectionTypes);



