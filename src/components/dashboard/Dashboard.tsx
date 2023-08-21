import React from "react";
import { UserSavingsDetails } from "./UserSavingsDetails";
import { TransactionDetails } from "./TransactionDetails";
import { CashoutTransactionDetails } from "./CashoutTransactionDetails";
import { TransactionComparative } from "./TransactionComparative";

export const Dashboard = () => {
  return (
    <div className="">
      <UserSavingsDetails />        
      <TransactionDetails />
      <CashoutTransactionDetails />
      <TransactionComparative />
    </div>
  );
};
