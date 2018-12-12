'use strict';

var scope = 'global';
function checkScope() {
    scope = 'local';
    console.log(scope);
    myScope = 'local';
    console.log(myScope);
}
checkScope();
console.log(scope);
console.log(myScope);

function makeInnerScope() {
    i = 10;
    if (true) {
        var i = 4;
    }
    console.log(i);
}

makeInnerScope();

var anotherScope = 'global';
function checkAnotherScope() {
    var anotherScope = 'local';
    function inner() {
        var anotherScope = 'nested';
        console.log(anotherScope);
    }
    inner();
    console.log(anotherScope);
}
checkAnotherScope();
console.log(anotherScope);
