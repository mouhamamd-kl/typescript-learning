export class Account {
    // readonly id: number;
    // owner: string;
    // private balance: number;
    nickname?: string
    constructor(public readonly id: number, public owner: string, private _balance: number) {
        // this.id = id;
        // this.balance = balance;
        // this.owner = owner;
    }
    deposit(money: number): void {
        if (money <= 0) {
            throw new Error("invalid money");
        } else {
            this._balance += money;
        }
    }
    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
        if (this.balance <= 0)
            throw new Error('invalid ')
        this._balance = value;
    }
}