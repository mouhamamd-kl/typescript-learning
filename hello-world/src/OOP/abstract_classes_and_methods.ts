abstract class Shape {
    constructor(public color: string) { }
    abstract render(): void;
}
class Circle extends Shape {
    override render(): void {
        console.log("rendering circle with color" + this.color);
    }
}