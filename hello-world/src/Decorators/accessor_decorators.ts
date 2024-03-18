function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);
        return (typeof result==='string') ? result.toLocaleUpperCase() : result;
    }
}
class Employee {
    constructor(readonly firstName: string, readonly lastName: string) { }
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
let emp = new Employee('mouhammad', 'kl');
console.log(emp.fullName);