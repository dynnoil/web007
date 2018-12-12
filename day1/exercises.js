import { deepEqual } from 'assert';

function find(array, predicate) {
    for (let element of array) {
        if (typeof (element) !== 'number') {
            return null;
        }
    }
    const result = [];
    for (let i = 0, j = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result[j++] = array[i];
        }
    }
    return result;
}

const result1 = find([1, 2, 3, 4, 5, 6, 7], function (elem) {
    return elem > 3;
});
deepEqual(result1, [4, 5, 6, 7]);

const result2 = find([1, 2, 3, "4"], function (elem) {
    return true;
});
deepEqual(result2, null);