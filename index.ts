import inquirer from "inquirer"


class Student {
    name:string
    constructor(n:string){
        this.name = n
    }
}

class Person {
 students:Student []=[];
    addStudent(obj: any) {
     this.students.push(obj)
    }
}

const persons = new Person();

const programStart = async (persons: Person) => {
do{console.log("Welcome Guest")


const ans = await inquirer.prompt({
   type: "list",
   message: "whom do you wanna talk to?",
   name: "select",
   choices: ["To myself", "student"]
})

if(ans.select === "To myself") {
    console.log("hello me khud Se baat kar raha hun")
    console.log("meri tabiyat achi hai")
}
if(ans.select === "student"){
    const ans = await inquirer.prompt({
        type: "input",
        message: "which student you wanna talk to?",
        name: "student"
    })

   const student = persons.students.find(val => val.name == ans.student )
if(!student) {
    const name = new Student(ans.student);
        persons.addStudent(name);
        console.log(`Hello i am ${name.name} and im doing good`);
        console.log(persons.students)
    }
    if (student) {
        console.log(`Hello iam ${student.name},and im doing good...`);
        console.log(persons.students)
    }
}
} while(true)}
programStart(persons)
