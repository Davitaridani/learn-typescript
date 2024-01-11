"use strict";
// ============= Union ============= 
function unionTypes(param1) {
    if (typeof param1 === 'string') {
        console.log(param1.toUpperCase());
    }
    else {
        console.log(param1);
    }
    return param1;
}
unionTypes(2);
const IntersectionTypes = {
    name: "Davit",
    age: 24,
    salary: 100000,
    JobTitle: "Developer",
    Department: "IT",
    jabatan: "Manager"
};
function printIntersectionTypes(params) {
    console.log(`Name is ${params.name} and Age is ${params.age} and Salary is ${params.salary}`);
    // console.log(params.name);
    // console.log(params.age);
    // console.log(params.salary);
    // console.log(params.JobTitle);
    // console.log(params.Department);
    // console.log(params.jabatan);
}
printIntersectionTypes(IntersectionTypes);
