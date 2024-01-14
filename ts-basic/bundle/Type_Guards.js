"use strict";
// Type Of
function typeOf(params) {
    if (params && typeof params === 'object') {
        for (const item of params) {
            console.log(item);
        }
    }
    else if (typeof params === 'string') {
        console.log(params);
    }
    else {
        console.log('Empty');
    }
}
typeOf(['Nilainya String']);
typeOf(['Ahmat', 'Davit', 'Ari']);
