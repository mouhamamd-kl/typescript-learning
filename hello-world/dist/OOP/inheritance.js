"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    walk() { }
    eat() { }
    get getfullName() {
        return this.firstName + ' ' + this.secondName;
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(studentId, FN, SN) {
        super(FN, SN);
        this.studentId = studentId;
    }
}
exports.Student = Student;
let stud = new Student(1, 'mouhammad', 'kl');
console.log(stud.getfullName);
//# sourceMappingURL=inheritance.js.map