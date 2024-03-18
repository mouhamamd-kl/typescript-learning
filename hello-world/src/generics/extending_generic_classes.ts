interface Product {
    name: string,
    price: number
}
class store<T> {
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
}

//! pass the generic type
class CompressibleStore<T> extends store<T> {
    compress(): void { }
}
//! Restrict the generic type parameter
class searchableStore<T extends { name: string }> extends store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

//! Fix the generic type parameter
class ProductStore extends store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}