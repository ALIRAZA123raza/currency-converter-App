#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green.bold("\n \t welcom to Ali Raza currency converter Application \n"))

let currency: any ={
    "USD": 1,
    "EUR": 0.9,
    "JYP":113,
    "AUD":1.65,
    "IND":74.57,
    "PKR":280

} 

let user_answer = await inquirer.prompt([
    {
       name:"From",
       message:"Select The currency to convert From:",
       type:"list",
       choices:["USD","EUR","JYP","AUD","IND","PKR"]

    },
    {
        name:"To",
        message:"Select The Currency To Convert Into",
        type:"list",
        choices:["USD","EUR","JYP","AUD","IND","PKR"]
 
     },
     {
        name:"amount",
        message:"Enter the amount ",
        type:"number",
     },

]);

let fromAmount = currency[user_answer.From];
let  toAmount = currency[user_answer.To];
let amount = user_answer.amount

let baseAmount = amount / fromAmount
let convertAmount = baseAmount * toAmount

console.log(`converted Amount ${chalk.yellowBright(convertAmount.toFixed(2))}`);