import inquirer from "inquirer";

let convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP"
    amount: number
} = await inquirer.prompt([
    {
        type:"list",
        name: "from",
        Choices: ["PKR", "USD", "GBP"],
        message: "select your covertion currency"
    },
    {
        type: "list",
        name: "to",
        Choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "enter your convertion amount"
    }
]);

const {from, to , amount} = answer;

if (from && to && amount) {
  let result = convertion[from][to] * amount;
  console.log(`your convertion from ${from} to ${to} is ${result}`)
}else{
    console.log("invalid inputs")
}