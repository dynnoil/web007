'use-strict';
var array = [1, 2, 3, 4, 5, 6];
var filteredArray = array.filter(function (x) {
    return x > 3;
});
filteredArray.forEach(function (elem) {
    document.write(`${elem}<br/>`);
});
var result = filteredArray.find(function (elem) {
    return elem > 4;
});
document.write(result);