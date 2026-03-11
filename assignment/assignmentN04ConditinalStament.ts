/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions
*/
{
let bankStatment : number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];


let Creditamount : number = 0;
let debitAmount: number = 0;
let SuspiciousTransactionCount = 0;
let CreditCount : number = 0;
let debitCount: number = 0;
for (i =0 ;i < bankStatment.length; i++)
{
if (bankStatment[i] > 0)
{
CreditCount ++;
Creditamount+= bankStatment[i];
}
else 
{
    debitCount ++;
   debitAmount += bankStatment[i];
}

switch (true)
{
case (bankStatment[i] >10000):
console.log("Suspicious credit Transaction with Amount = " + bankStatment[i]);
SuspiciousTransactionCount++;
break;
case (bankStatment[i] < -10000):
console.log("Suspicious debit Transaction with Amount = " + bankStatment[i]);
SuspiciousTransactionCount++;
break;
}}
console.log("Total suspicious credit/ debit Transaction count is = " +SuspiciousTransactionCount);
console.log("Total number of credit transactions completed count is = " +CreditCount);
console.log("Total number of debit transactions completed count is = " +debitCount);
console.log("Total amount  credited in account is = " + Creditamount);
console.log("Total amount  debited  in account is = " + debitAmount);
console.log("Total amount  remaning in account is = " + (Creditamount-debitAmount));
}