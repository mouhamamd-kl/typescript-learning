"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const paramterized_decorators_1 = require("./paramterized_decorators");
function pipe(constructor) {
    console.log("called  the pip");
    constructor.prototype.pip = '';
}
let hello = class hello {
};
hello = __decorate([
    (0, paramterized_decorators_1.component)({ selector: '#div' }),
    pipe
], hello);
//# sourceMappingURL=composition_decorators.js.map