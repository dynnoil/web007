// literal object creation
var person = { name: "Vasya", town: "Vologda" };
person.hasBike = true;
console.info(person);
console.info(`Name: ${person.name}\nTown: ${person['town']}\nHas bike: ${person.hasBike}\n`);

var otherPerson = Object.create(null, {
    name: {
        configurable: false,
        enumerable: true,
        writable: true,
        value: 'Vasilij'
    }
});
console.info(Object.getOwnPropertyDescriptor(otherPerson));