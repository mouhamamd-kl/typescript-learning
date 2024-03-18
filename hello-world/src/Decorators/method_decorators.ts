//! version 1
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//     const original = descriptor.value as Function;
//     descriptor.value = function (message: string) {
//         console.log('Before');
//         original.call(this, message)
//         console.log('After');
//     }
// }
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
        console.log('before');
        original.call(this, args);
        console.log('after');

    }
}
class Person {
    @Log
    say(message: string) {
        console.log('person say: ' + message);
    }
}
let pe = new Person();
pe.say('hello')