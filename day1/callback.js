function makeIt(str, cb) {
    cb(str);
}

function callback(msg) {
    alert(msg);
}

makeIt('hello', callback);
makeIt('another hello', function (msg) {
    alert(msg);
});