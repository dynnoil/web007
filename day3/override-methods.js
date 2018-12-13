function Lamp(address) {
    this.address = address;
    // private field, just an agreement
    this._state = false;
}

Lamp.prototype.on = function () {
    this._state = true;
    console.log(`Turn on lamp with address ${this.address}`);
}

Lamp.prototype.off = function () {
    this._state = false;
    console.log(`Turn off lamp with address ${this.address}`);
}

function DimmerLamp(address) {
    Lamp.call(this, address); // super()
    // Lamp.apply(this, arguments); // super()
    this.super = Lamp.prototype;
    this._brightness = 100;
}

DimmerLamp.prototype = Object.create(Lamp.prototype);
DimmerLamp.prototype.constructor = DimmerLamp;

DimmerLamp.prototype.setBrightness = function (brightness) {
    this._brightness = brightness;
    console.log(`Set brightness value = ${this._brightness} for a lamp with address ${this.address}`);
}

DimmerLamp.prototype.on = function () {
    console.log('on method of DimmerLamp');
    this.super.on.call(this);
}

var myLamp1 = new Lamp(1);
var myLamp2 = new Lamp(2);
var myDimmerLamp1 = new DimmerLamp(3);
var myDimmerLamp2 = new DimmerLamp(4);

myLamp1.on();
myLamp1.off();
myLamp2.on();
myLamp2.off();
myDimmerLamp1.on();
myDimmerLamp2.on();
myDimmerLamp1.setBrightness(50);
myDimmerLamp2.setBrightness(30);
