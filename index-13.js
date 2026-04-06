"use strict";

/*
 * ==================
 *   START OF HW-13
 * ==================
 *
 * HERE IS NO MARKUP.
 *
 *
 */

/* TASK 1 & 2 */
// 1: DONE
// 2 - CODE BELOW | DONE

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    if (amount > this.balance) {
      console.log("Error: Insufficient funds.");
      return;
    }
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type.toLowerCase() === type.toLowerCase()) {
        total += transaction.amount;
      }
    }

    return total;
  },
};

// TEST
console.log(`Current balance is ${account.getBalance()} UAH`); // 0
account.deposit(1000); // 0 + 1000 = 1000
account.deposit(500); // 1000 + 500 = 1500
account.withdraw(300); // 1500 - 300 = 1200
account.withdraw(2000); // 1500 - 2000 = -500 (Error: Insufficient funds)

console.log(`Current balance is ${account.getBalance()} UAH`); // 1200
console.log(`Transaction #2 Details`, account.getTransactionDetails(2));
console.log(
  `Total deposits: ${account.getTransactionTotal(Transaction.DEPOSIT)}`,
);
console.log(
  `Total withdraws: ${account.getTransactionTotal(Transaction.WITHDRAW)}`,
);

/*
 * ================
 *   END OF HW-13
 * ================
 */
