"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const inheritance_1 = require("./inheritance");
class Teacher extends inheritance_1.Person {
    get getfullName() {
        return 'professor:' + super.getfullName;
    }
}
exports.Teacher = Teacher;
let teacher = new Teacher('mouhammad', 'kl');
console.log(teacher.getfullName);
//# sourceMappingURL=overriding_methods.js.map