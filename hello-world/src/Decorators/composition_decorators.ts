import { component } from "./paramterized_decorators";

function pipe(constructor: Function) {
    console.log("called  the pip");
    constructor.prototype.pip = '';
}

@component({selector:'#div'})
@pipe
class hello{}
