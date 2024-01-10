"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Boolean 
const isActive = true;
console.log(isActive);
// Array
const numbers = [1, 2, 3];
console.log(numbers);
// Function
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Ahmat"));
// function with promise
function cetak(param) {
    return __awaiter(this, void 0, void 0, function* () {
        return `Hello ${param}`;
    });
}
console.log(cetak("Ahmat"));
// Object Type
function printObj(param) {
    console.log(`name is ${param.name}`);
    console.log(`Age is ${param.age}`);
}
printObj({ name: 'davit' });
printObj({ name: 'davit', age: 123 });
// Union Types
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(101);
printId("202");
