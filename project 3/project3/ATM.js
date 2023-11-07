import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "select your account type",
    },
    {
        type: "list",
        name: "transtactionType",
        choices: ["fast Cash", "Withdraw",],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000,],
        message: "select your amount",
        when(answers) {
            return answers.transtactionType == "fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transtactionType == "Withdraw";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("insuficiant Balance");
    }
}
