import inquirer from "inquirer";

let todos: string[] = [];

let loop = true;

while(loop) {
    const answers :{
        TODO: string,
        addmore: boolean
    }= await inquirer.prompt([

{
    type: "input",
    name: "TODO",
    message: "What do you want to add in your todo ",
},
{
    type: "confirm",
    name: "addmore",
    message: "Do you want add more todo? ",
    default: false
},

])
const {TODO,addmore} = answers;
console.log(answers)
loop = addmore
if (TODO) {
    todos.push(TODO)

}else{
    console.log("kindly add valid input")
}
}
if (todos.length > 0){
    console.log("your todo list:")
    todos.forEach(todo => {
        console.log(todo)

    })

}else{
    console.log("no todo found")
}