"use strict";
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount("12345", 1000);
console.log(account.accountNumber);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map