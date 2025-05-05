{
  //  getter and setter

  class BankAccount {
    readonly id: number;
    accountName: string;
    protected _balance: number;

    constructor(id: number, accountName: string, balance: number) {
      this.id = id;
      this.accountName = accountName;
      this._balance = balance;
    }

    // addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // ***  use of getter
    get balance() {
      return this._balance;
    }

    // getBalance(): number {
    //   return this._balance;
    // }

    //** use of setter */

    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const goribManuserAccount = new BankAccount(121, "Gorid Ridoy", 230);

  goribManuserAccount.deposite = 100; //using deposit funtion like property

  const myBalance = goribManuserAccount.balance; //getting balance like property

  console.log(myBalance);
}
