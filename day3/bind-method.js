const object = {
    x: 1,
    getX: function() {
        return this.x;
    }
}

global.x = 2;

const myGetX = object.getX;
const bindedGetX = object.getX.bind(object);
const bindedGetXX = object.getX.bind(global);

console.log(myGetX());
console.log(object.getX());
console.log(bindedGetX());
console.log(bindedGetXX());