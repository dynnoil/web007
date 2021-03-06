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

function* generateNewId(prefix = 'id', initialNumber = 1, maxAmount = 10) {
    let index = initialNumber;
    while (index < maxAmount) {
        let result = yield prefix + index++;
        if (result != undefined && typeof result == 'number') {
            // TODO
        }
    }
}

/**
 * After return in generator function generator object returns done set to true
 */
function* genaratorFunc() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

const generatorObject = genaratorFunc();

deepEqual(generatorObject.next(), { done: false, value: 1 });
deepEqual(generatorObject.next(), { done: false, value: 2 });
deepEqual(generatorObject.next(), { done: true, value: 3 });
deepEqual(generatorObject.next(), { done: true, value: undefined });
