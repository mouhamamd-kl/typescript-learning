// ! Given the data below, define a type alias for representing users.
// type user = {
//     name: string,
//     age: number,
//     occupation?: string;
// }


// let users:user []= [
//     {
//         name: 'John Smith',
//         age: 30,
//         occupation: 'Software engineer'
//     },
//     {
//         name: 'Kate Müller',
//         age: 28
//     }
// ];
// users.forEach(n=>{
//     console.log(n.occupation||'no value');
// })

// ! Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
// type Bird = {
//     run(): void;
// }
// type fish = {
//     swim(): void;
// }
// let Pet: Bird | fish;
// let Shark: fish = {
//     swim(): void {

//     }
// };
// let Hawk: Bird = {
//     run(): void {

//     }
// };
// Pet = Hawk;

// ! Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc
enum WeekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

// ! simplify 
// type address = {
//     street?: string
// }
// type user = {
//     address?: address,
// }
// function getUser(): user | null {
//     return null;
// }
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// console.log(user?.address?.street??undefined);


// function foo(): void { }
// function bar(): void { }
// let x = foo ?? bar();

// ! What is the problem in this piece of code?
let value: unknown = 'a';
if (value instanceof String) {
    console.log(value.toUpperCase());
}