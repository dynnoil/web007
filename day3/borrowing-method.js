function argumentsToString() {
    let result = '';
    for (let arg of arguments) {
        result += arg + ',';
    }
    return result.slice(0, -1);
}
console.log(argumentsToString(1, 2, 3, 4, 5));

function argumentsToString2() {
    arguments.join = [].join;
    return arguments.join(',');
}
console.log(argumentsToString2(1, 2, 3, 4, 5));

function myJoin(delimeter) {
    let result = '';
    for (let index in this) {
        result += this[index] + delimeter;
    }
    return result.slice(0, -1);
}
function argumentsToString3() {
    return myJoin.call(arguments, ',');
}
console.log(argumentsToString3(1, 2, 3, 4, 5));
