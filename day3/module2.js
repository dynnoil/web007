(function () {
    function mylib() { }
    mylib.show = function () {
        document.writeln('<span style="color: green">show from module</span>');
    }
    mylib.toHeader = function (size, text) {
        return `<h${size}>${text}</h${size}>`;
    }
    window._$_ = mylib // export
})();
