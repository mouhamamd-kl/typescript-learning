 export class Person {
    constructor(private firstName: string, private secondName: string) { }
    public walk(): void { }
    public eat(): void { }
    get getfullName(): string {
        return this.firstName + ' ' + this.secondName
    }
}
export class Student extends Person {
    constructor(public studentId:number,FN: string, SN: string) {
        super(FN, SN);
    }
}
let stud = new Student(1,'mouhammad', 'kl')
console.log(stud.getfullName);
