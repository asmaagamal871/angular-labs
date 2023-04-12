class Account {
    constructor(private Acc_no: string, private Balance: number) { }

    debitAmount(amount: number) { }

    creditAmount(amount: number) { }

    getBalance() { }
}

interface IAccount {
    date_of_openning: Date;
    addCustomer(customer: string): void;
    removeCustomer(customer: string): void;
}

class Current_Account extends Account implements IAccount {

    constructor(Acc_no, Balance, public date_of_openning: Date, public Interest_rate: number) {
        super(Acc_no, Balance);
    }
    addCustomer(customer: string): void {
        console.log(customer);
    }
    removeCustomer(customer: string): void {
        console.log(customer)
    }
}

class saving_Account extends Account implements IAccount {
    constructor(Acc_no, Balance, public date_of_openning: Date, public Interest_rate: number) {
        super(Acc_no, Balance)
    }
    addCustomer(customer: string): void {
        console.log(customer);
    }
    removeCustomer(customer: string): void {
        console.log(customer)
    }
}

var savingAccount = new saving_Account(48, 600, new Date("2020-03-17"), 9);
var currentAccount = new Current_Account(10, 160, new Date("2028-11-24"), 7);

console.log(savingAccount.date_of_openning);


