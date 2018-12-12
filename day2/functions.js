import { equal } from 'assert';

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

equal(sum(1, 2), 3);
equal(sum(1, 2, 3, 4, 5), 15);
equal(sum(1, 2, 3, 4, 50), 60);

function someFunc(...params) {
    for (let param of params) {
        console.log(param);
    }
}
someFunc(1, 2, 3);