"use strict";
// Functions
// Return Type
console.log(" =========== return type =========== ");
function printReturnType(param) {
    return param;
}
console.log(printReturnType("function return type"));
// Void return type
console.log(" =========== Void return type =========== ");
function printVoid(param) {
    console.log(param);
}
printVoid("function return type void");
console.log(" =========== Function parameter =========== ");
// Function parameter
function printFunctParams(param1, params2) {
    if (typeof param1 === 'string' && typeof params2 === 'string') {
        console.log(`param1 dan params2 type string = ${param1} + ${params2}`);
    }
    else if (typeof param1 === 'number' && typeof params2 === 'number') {
        console.log(`param1 + params2 type number = ${param1}, ${param1} `);
    }
    else {
        console.log("Tipe data tidak sesuai");
    }
}
printFunctParams("Davit", "Ari");
printFunctParams(20, 100);
printFunctParams(true);
// Default Parameters
console.log(" =========== Default Parameters =========== ");
function funtDefaultParams(param1, params2 = "Ini Nilai default params") {
    return `function nilai default ${param1} dan ${params2}`;
}
console.log(funtDefaultParams("Davit"));
console.log(funtDefaultParams("Davit", "Ahmat"));
// function funcOverloading 
console.log(" =========== Fcuntion Overloading =========== ");
function funcOverloading(param1, param2) {
    if (typeof param1 === 'string' && typeof param2 === 'string') {
        return `funcOverloading param1 dan param2 type string = ${param1} + ${param2}`;
    }
    else if (typeof param1 === 'number' && typeof param2 === 'number') {
        return `funcOverloading param1 + param2 type number = ${param1}, ${param2} `;
    }
    else {
        throw new Error('Tipe data tidak sesuai');
    }
}
console.log(funcOverloading(111, 233));
console.log(funcOverloading("DDD", "AAA"));
