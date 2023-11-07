import inquirer from "inquirer";
const systemgenerateno = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your Guess"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemgenerateno, `sys`);
if (userGuess === systemgenerateno) {
    console.log("Yay Your answer is correct \n You win!");
}
else {
    console.log("Please try again better luck next time");
}
