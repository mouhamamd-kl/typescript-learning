function decorator(constuctor: Function) {
    console.log("the decorator got called");
    constuctor.prototype.uniqueId = 0;
    constuctor.prototype.insertInTheDom = () => {
        console.log("hello from inserting the function");

    };
}
@decorator
class user { }