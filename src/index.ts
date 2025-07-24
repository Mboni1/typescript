class BankAccount {
  private balance: number;
  public accountNumber: string;
  
  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }
  
  public deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;  // Can access private member within class
    }
  }
  
  public getBalance(): number {
    return this.balance;  // Expose through controlled method
  }
}

const account = new BankAccount("12345", 1000);
console.log(account.accountNumber);  // OK
// console.log(account.balance);     // Error: Property 'balance' is private
console.log(account.getBalance());   // Proper way to access


