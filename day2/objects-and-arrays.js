import { deepEqual, equal } from 'assert';

// Task #1
var object1 = {};
equal(object1.prop, undefined);
try {
    prop;
} catch (e) {
    equal(e.name, 'ReferenceError');
    console.error(e);
}

// Task #2
var object2 = {};
object2.prop = 'some';
for (let prop in object2) {
    console.log(prop);
}
equal(object2.hasOwnProperty('prop'), true);
delete object2.prop;
for (let prop in object2) {
    console.log(prop);
}
equal(object2.hasOwnProperty('prop'), false);

// Task #3
var array1 = new Array({ "attr1": "value1", "attr2": "value2" }, { "attr1": "value1", "attr2": "value2" });
console.log(array1);

// Task #4
var array2 = [];
array2[1] = 1;
equal(array2.length, 2);
array2[9999] = 1;
equal(array2.length, 10000);

array2 = [1, 2, 3, 4];
array2[array2.length] = "new_element";
console.log(array2);
equal(array2[array2.length - 1], "new_element");
array2.push('new_element');
equal(array2[array2.length - 1], "new_element");
console.log(array2.length);
console.log(array2.pop());
console.log(array2.length);
array2.length = 0;
deepEqual(array2, []);

// Task #5
var array3 = [];
array3[1] = 123;
array3[9999] = 456;
for (let index in array3) {
    console.log('index: ' + index + ', value: ' + array3[index]);
}
equal(array3.length, 10000);
equal(array3.hasOwnProperty("1"), true);
equal(array3.hasOwnProperty(9999), true);
equal(array3.hasOwnProperty(9998), false);

// Task #6
var array4 = new Array();
array4[-1] = -1;
array4[-2] = -2;
array4[0] = 0;
array4[1] = 1;
array4[2] = 2;
console.log(array4.length);
for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
}
for (let prop in array4) {
    console.log(prop);
}
console.log(array4[array4[-2] + array4[1]]);
console.log(array4[3]);
equal(array4.hasOwnProperty(-1), true);
equal(array4.hasOwnProperty(-2), true);