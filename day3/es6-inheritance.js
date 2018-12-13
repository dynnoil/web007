class Lamp {
    constructor(address) {
        this.address = address;
        this._state = false;
    }

    on() {
        this._state = true;
        console.log(`Turn on lamp with address ${this.address}`);
    }

    off() {
        this._state = false;
        console.log(`Turn off lamp with address ${this.address}`);
    }
}

class DimmerLamp extends Lamp {
    constructor(address) {
        super(address);
        this._brightness = 100;
    }

    setBrightness(brightness) {
        this._brightness = brightness;
        console.log(`Set brightness value = ${this._brightness} for a lamp with address ${this.address}`);
    }

    on() {
        console.log('on method of DimmerLamp');
        super.on();
    }
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
