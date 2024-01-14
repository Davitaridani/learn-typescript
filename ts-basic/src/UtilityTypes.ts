// Utility Types

// Partial
interface PersonPar {
  name: string
  addres: string
  age: number
}

interface Car {
  name : string
  year : number
  color?: string
}

interface User {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<PersonPar>
type PartialCar = Required<Car>

function funcPartial(params: PartialPerson) : void {
  console.log(params)
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);

function notFuncParial(params: PersonPar) : void {
  console.log(params)
}

funcPartial({
  name: 'davit',
})

notFuncParial({
  name: 'davit',
  age: 33,
  addres: 'Indoneisa',
})

// Partial Required 

function funcPartialRequired(params: PartialCar) : void {
  console.log(params)
}

funcPartialRequired({
  name: 'davit',
  year: 2022,
  color: 'red'
})