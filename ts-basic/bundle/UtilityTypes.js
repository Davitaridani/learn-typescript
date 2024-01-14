"use strict";
// Utility Types
function funcPartial(params) {
    console.log(params);
}
function notFuncParial(params) {
    console.log(params);
}
funcPartial({
    name: 'davit',
});
notFuncParial({
    name: 'davit',
    age: 33,
    addres: 'Indoneisa',
});
// Partial Required 
function funcPartialRequired(params) {
    console.log(params);
}
funcPartialRequired({
    name: 'davit',
    year: 2022,
    color: 'red'
});
