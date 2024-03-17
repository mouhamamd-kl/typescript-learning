"use strict";
class Ride {
    constructor() {
        this.start();
    }
    start() {
        Ride.activeRides += 1;
    }
}
Ride.activeRides = 0;
let a = new Ride();
let b = new Ride();
console.log(Ride.activeRides + " active rides");
//# sourceMappingURL=static_members.js.map