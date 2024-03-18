interface IAnimal {
    name: string
}
class dog implements IAnimal {
    constructor(public name: string) {

    }

}
function echo<T>(value: T) {
    return value;
}
let echoString = echo('1');
let echoNumber=echo(1);
function echo2<T extends string | number>(value: T) {
    return value;
}
//! can't echo boolean here because we told the compiler we can only echo number or string
// let echoThing=echo2(true);
function echo3<T extends IAnimal>(value: T) {
    return value;
}
let echoAnimal=echo3(new dog('nietenyaho'))
