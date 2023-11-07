import inquirer from "inquirer"
import chalk from "chalk"

inquirer

class Player {
    name:string;
    fuel:number = 100;
    constructor(name: string){
        this.name = name
    }
fuelDecrease() {
    let fuel = this.fuel -25
    this.fuel = fuel
}
fuelIncrease() {
     this.fuel = 100
}
}
class Opponent {
    name:string;
    fuel:number = 100;
    constructor(name: string){
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"please enter your name:"
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "seleect your opponent",
    choices:["hamza","bilal","abubakar"]

})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{

if (opponent.select == "hamza"){
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
}
let ask = await inquirer.prompt({
    type: "list",
    name: "opt",
    message: "select your opponent",
    choices: ["Attact", "Drink portion", "Run for your life"]
})

if (ask.opt == "Attact"){
    let num = Math.floor(Math.random() *2)
    if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
       console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
       if (p1.fuel <= 0) {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
        process.exit()
    }
    }
    if (num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        if (o1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Win"))
            process.exit()
        }
    }
}

if (ask.opt == "Drink portion"){
    p1.fuelIncrease
    console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
}
if (ask.opt == "Run for your life"){
    console.log(chalk.red.bold.italic("you loose Better Luck next time"))
    process.exit()
}
}
while(true)