"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(money) {
        if (money <= 0) {
            throw new Error("invalid money");
        }
        else {
            this._balance += money;
        }
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (this.balance <= 0)
            throw new Error('invalid ');
        this._balance = value;
    }
}
exports.Account = Account;
//# sourceMappingURL=1_class.js.map