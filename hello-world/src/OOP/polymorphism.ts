import { Person, Student } from "./inheritance";
import { Teacher } from "./overriding_methods";
class Principle extends Person {
    override get getfullName(): string {
        return 'princaple:' + super.getfullName;
    }
}
function printNames(people: Person[]) {
    people.forEach(element => {
        console.log(element.getfullName);
    });
}
printNames([
    new Student(0, 'mouhammad', 'kl'),
    new Teacher('abo', 'obaida'),
    new Principle('3mak', 'wlak')
]);