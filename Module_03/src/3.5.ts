{
  // Access Modifiers 1.private, 2.readonly, 3.protected

  class BankAccount {
    readonly id: number;
    accountName: string;
    // private _balance: number; //( _ ) convention of writing private property

    protected _balance: number;

    constructor(id: number, accountName: string, balance: number) {
      this.id = id;
      this.accountName = accountName;
      this._balance = balance;
    }

    addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance(): number {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    constructor(id: number, accountName: string, balance: number) {
      super(id, accountName, balance);
    }
  }

  const goribManuserAccount = new BankAccount(121, "Gorid Ridoy", 200);

  //   goribManuserAccount.balance = 111;
  goribManuserAccount.addDeposite(100);
  const myBalance = goribManuserAccount.getBalance();

  console.log(myBalance);
}
