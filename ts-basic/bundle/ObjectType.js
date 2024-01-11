"use strict";
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Fullfilled"] = 1] = "Fullfilled";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
const numberOrder = [1, 2, 3];
function greet(person) {
    return `Hello ${person.name}, age is ${person.age}`;
}
console.log(greet({ name: 'davit', age: 33 }));
function print(mhs) {
    return `Hello ${mhs.name}, age is ${mhs.age} and email is ${mhs.email}`;
}
console.log(print({ name: 'davit', age: 33, email: 'davit@ts.com' }));
const currentStatus = Status.Pending;
function printStatus(status) {
    if (status === Status.Pending) {
        return 'Your status is pending';
    }
    else if (status === Status.Fullfilled) {
        return 'Your status is fullfilled';
    }
    else {
        return 'Your status is rejected';
    }
}
console.log(printStatus(currentStatus));
function printStatusCode(statusCode) {
    if (statusCode === StatusCode.OK) {
        return `Your status code is ${StatusCode.OK} / 200`;
    }
    else if (statusCode === StatusCode.NotFound) {
        return `Your status code is ${StatusCode.NotFound} / 404`;
    }
    else {
        return `Your status code is ${StatusCode.InternalServerError} / 500`;
    }
}
console.log(printStatusCode(StatusCode.NotFound));
let employee = ['davit', 33, false];
let names = employee[0];
let age = employee[1];
let active = employee[2];
console.log(`Name: ${names}, Age: ${age}, Active: ${active}`);
