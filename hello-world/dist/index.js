"use strict";
let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 28
    }
];
users.forEach(n => {
    console.log(n.occupation || 'no value');
});
//# sourceMappingURL=index.js.map