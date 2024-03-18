function minLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} length must be at least ${length}`);
                }
                value = newValue;
            }
        }
        Object.defineProperty(target,propertyName,descriptor);
    }
}
class Laptop {
    @minLength(4)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let y=new Laptop('mou');