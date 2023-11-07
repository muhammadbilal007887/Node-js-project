import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word"
    }
])

const words = answer.sentence.trim().split(" ")
console.log(`your word count is ${words.length} `)