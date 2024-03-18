interface Product2 {
    name: string,
    price: number
}
class store2<T> {
    protected _objects: T[] = [];
    store(object: T): void {
        this._objects.push(object);
    }

    remove(object: T): void {
        const index = this._objects.findIndex(obj => obj === object);
        if (index !== -1) {
            this._objects.splice(index, 1);
        }
        console.log("removed");

    }
    find(property:keyof T,value:unknown):T|undefined{
        return this._objects.find(obj=>obj[property]==value);
    }
}