"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = require("./inheritance");
const overriding_methods_1 = require("./overriding_methods");
class Principle extends inheritance_1.Person {
    get getfullName() {
        return 'princaple:' + super.getfullName;
    }
}
function printNames(people) {
    people.forEach(element => {
        console.log(element.getfullName);
    });
}
printNames([
    new inheritance_1.Student(0, 'mouhammad', 'kl'),
    new overriding_methods_1.Teacher('abo', 'obaida'),
    new Principle('3mak', 'wlak')
]);
//# sourceMappingURL=polymorphism.js.map