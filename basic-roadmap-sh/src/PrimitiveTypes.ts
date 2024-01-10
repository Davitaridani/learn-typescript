// Boolean 
const isActive: boolean = true;

console.log(isActive);

// Array
const numbers: number[] = [1, 2, 3];
console.log(numbers);

// Function
function sayHello(name:string): string{
  return `Hello ${name}`
}

console.log(sayHello("Ahmat"));

// function with promise
async function cetak(param: string) {
  return `Hello ${param}`
}

console.log(cetak("Ahmat"));

// Object Type
function printObj (param : {name: string, age?: number}) {
  console.log(`name is ${param.name}`)
  console.log(`Age is ${param.age}`)
}

printObj({name: 'davit'});
printObj({name: 'davit', age: 123});

// Union Types
function printId (id: number | string) {
  if( typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(101);
printId("202");