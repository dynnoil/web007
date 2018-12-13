import { equal, deepEqual } from 'assert';

function* range(start, stop, step = 1) {
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

var x = range(1, 10);

deepEqual(x.next(), { value: 1, done: false });

var array = [...range(1, 3)];
deepEqual(array, [1, 2]);

for (let value of range(1, 5)) {
    console.log(value);
}

function* generateId(prefix = 'id', initialNumber = 1, maxAmount = 10) {
    let index = initialNumber;
    while (index < maxAmount) {
        yield prefix + index++;
    }
}

var idGenerator = generateId('my');
var id = idGenerator.next().value;
equal(id, 'my1');

function* generateElementsId(prefixes = ["id"], initialNumber = 1, maxAmount = 10) {
    for (let prefix of prefixes) {
        yield* generateId(prefix, initialNumber, maxAmount);
    }
}

const ids = [...generateElementsId(['btn', 'div'], 1, 5)];
console.log(ids);
