"use strict";
class store2 {
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
    find(property, value) {
        return this._objects.find(obj => obj[property] == value);
    }
}
//# sourceMappingURL=the_key_of_operator.js.map