class Ride {
    static activeRides: number = 0;
    constructor() {
        this.start();
    }
    start(): void {
        Ride.activeRides += 1;
    }
}
let a = new Ride();
let b = new Ride();
console.log(Ride.activeRides + " active rides");