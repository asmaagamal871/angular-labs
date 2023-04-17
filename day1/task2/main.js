class Account {
    constructor(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount(amount) { }
    creditAmount(amount) { }
    getBalance() { }
}
class Current_Account extends Account {
    constructor(Acc_no, Balance, date_of_openning, Interest_rate) {
        super(Acc_no, Balance);
        this.date_of_openning = date_of_openning;
        this.Interest_rate = Interest_rate;
    }
    addCustomer(customer) {
        console.log(customer);
    }
    removeCustomer(customer) {
        console.log(customer);
    }
}
class saving_Account extends Account {
    constructor(Acc_no, Balance, date_of_openning, Interest_rate) {
        super(Acc_no, Balance);
        this.date_of_openning = date_of_openning;
        this.Interest_rate = Interest_rate;
    }
    addCustomer(customer) {
        console.log(customer);
    }
    removeCustomer(customer) {
        console.log(customer);
    }
}
var savingAccount = new saving_Account(48, 600, new Date("2020-03-17"), 9);
var currentAccount = new Current_Account(10, 160, new Date("2028-11-24"), 7);
console.log(savingAccount.date_of_openning);
