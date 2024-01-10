interface Person {
  name: string
  age: number
}

// ? Properti optional with 
interface Mhs {
  name: string
  age: number
  email?: string
  phone?: string
}

interface Car {
  name: string
  year: number
}

enum Status {
  Pending, 
  Fullfilled,
  Rejected
}

enum StatusCode {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

const numberOrder: number[] = [1, 2, 3]

// Tulples 


function greet (person: Person) {
  return `Hello ${person.name}, age is ${person.age}`
}
console.log(greet({ name: 'davit', age: 33 }))

function print (mhs: Mhs) {
  return `Hello ${mhs.name}, age is ${mhs.age} and email is ${mhs.email}`
}
console.log(print({ name: 'davit', age: 33, email: 'davit@ts.com' }))

const currentStatus: Status = Status.Pending

function printStatus (status: Status) {
  if (status === Status.Pending) {
    return 'Your status is pending'
  } else if (status === Status.Fullfilled) {
    return 'Your status is fullfilled'
  } else {
    return 'Your status is rejected'
  }
}
console.log(printStatus(currentStatus))

function printStatusCode (statusCode: StatusCode) {
  if (statusCode === StatusCode.OK) {
    return `Your status code is ${StatusCode.OK} / 200`
  } else if (statusCode === StatusCode.NotFound) {
    return `Your status code is ${StatusCode.NotFound} / 404`
  } else {
    return `Your status code is ${StatusCode.InternalServerError} / 500`
  }
}

console.log(printStatusCode(StatusCode.NotFound))


let employee: [string, number, boolean] = ['davit', 33, false]
let names: string = employee[0];
let age: number = employee[1];
let active: boolean = employee[2];

console.log(`Name: ${names}, Age: ${age}, Active: ${active}`);

