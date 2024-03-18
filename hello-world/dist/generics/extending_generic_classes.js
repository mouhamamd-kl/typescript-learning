"use strict";
class store {
    constructor() {
        this._objects = [];
    }
    store(object) {
        this._objects.push(object);
    }
    remove(object) {
        const index = this._objects.findIndex(obj => obj === object);
        if (index !== -1) {
            this._objects.splice(index, 1);
        }
        console.log("removed");
    }
}
class CompressibleStore extends store {
    compress() { }
}
class searchableStore extends store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
//# sourceMappingURL=extending_generic_classes.js.map