"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    render() {
        console.log("rendering circle with color" + this.color);
    }
}
//# sourceMappingURL=abstract_classes_and_methods.js.map