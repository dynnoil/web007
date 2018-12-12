// Task #1
var number = 100;
var str = number + " bottles of beer on the wall. ";
document.writeln(str);
document.writeln(number + '');
document.writeln(String(number));
document.writeln(number.toString());
document.writeln(number.toString(2));

var floatingNumber = 123456.789;
document.writeln(floatingNumber.toFixed());
document.writeln(floatingNumber.toFixed(2));
document.writeln(floatingNumber.toExponential(1));
document.writeln(floatingNumber.toExponential(3));
document.writeln(floatingNumber.toPrecision(7));

// Task #2
document.writeln('<br/>');
var product = "21" * "2";
document.writeln('product of type ' + typeof (product) + ' is equal ' + product);
document.writeln('some' - 0);
document.writeln(Number('this is 0'));
document.writeln(parseInt("3 blind mice"));
document.writeln(parseFloat('3.15 number'));
document.writeln(parseInt("12.34"));
document.writeln("11", 2);
document.writeln(parseInt('eleven'));
document.writeln(parseFloat('$72.43'));

// Task #3
document.writeln('<br/>');
document.writeln(Boolean(undefined));
document.writeln(Boolean(null));
document.writeln(Boolean("aaa"));
document.writeln(Boolean(7));
document.writeln(Boolean(0));
document.writeln(Boolean(Infinity));
document.writeln(Boolean({ name: 'Oleg' }));
document.writeln(Boolean(!!1));

// Task #4
document.writeln('<br/>');
var n = 1;
var m = n;
function addToTotal(total, x) 
{
    total = total + x;
}
addToTotal(n, m);
document.writeln('n=' + n + ', m=' + m);

// Task #5
document.writeln('<br/>');
var oneDate = new Date(2018, 12 , 10);
var anotherDate = new Date(2018, 12, 10);
document.writeln(oneDate === anotherDate);
document.writeln(oneDate.valueOf() === anotherDate.valueOf());