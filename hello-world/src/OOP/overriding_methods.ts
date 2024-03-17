import { Person } from "./inheritance";

export class Teacher extends Person {
    public override get getfullName(): string {
        return 'professor:' + super.getfullName;
    }
}
let teacher = new Teacher('mouhammad', 'kl');
console.log(teacher.getfullName);