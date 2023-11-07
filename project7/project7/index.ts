import chalk from "chalk";
import inquirer from "inquirer";
import chalkAmination from "chalk-animation";

console.log(chalk.bold.blueBright(`*Welcome to Student Management System App Created by Shan-Ul-Haq*`));

let recordMain: string[] = []

async function smsApp() {
    let smsOperator = await inquirer.prompt({
        name: "operator",
        type: "list",
        choices: ["Insert-Record", "Update-Record", "Delete-Record", "All-Record", "Exit"],
        message: chalk.bold.yellowBright("Please Select your desired operator")
    })

    if(smsOperator.operator === "Insert-Record") {
        insertRecord();
    } else if(smsOperator.operator === "All-Record") {
        console.clear();
        allRecordMain()
        // console.log(recordMain)
    } else if(smsOperator.operator === "Update-Record") {
        updateRecord();
    } else if(smsOperator.operator === "Delete-Record") {
        deleteRecord();
    } else if(smsOperator.operator === "Exit") {
        console.log(chalk.bold.blueBright(`*Thank you for using CLI based Student Management System*`));
    }
};

async function insertRecord() {
    let insertApp = await inquirer.prompt([{
        name: "insertOp1",
        type: "input",
        message: "Please Enter Student ID:"
    },
    {
        name: "insertOp2",
        type: "input",
        message: "Please Enter Student Name:"
    },
    {
        name: "insertOp3",
        type: "list",
        choices: ["Science", "Commerce", "Arts"],
        message: "Please Select Your Course"
    }
    ])
    
    recordMain.push(`Student ID: ${insertApp.insertOp1}\nStudent Name: ${insertApp.insertOp2}\nCourses: ${insertApp.insertOp3}`);
    console.clear()
    console.log(chalk.bold.greenBright("**Your Information Recorded Successfully!**"))
    smsApp()
}

async function allRecordMain() {
    console.log(chalk.bold.yellowBright("*All Student Management Data Record*"));
        recordMain.map((record1) => {
        let recordIndex = recordMain.indexOf(record1) +1;
        console.log(chalk.bold.underline.greenBright(`\nStudent Data no.${recordIndex}`));
        console.log(record1);
        });
    smsApp()
}

async function updateRecord() {
    const editData = await inquirer.prompt([{
        name: "editNum",
        type: "number",
        message: "Please Enter the Student Data No. you want to Change:"
    },
    {
        name: "insertOp1",
        type: "input",
        message: "Please Enter New Student ID:"
    },
    {
        name: "insertOp2",
        type: "input",
        message: "Please Enter New Student Name:"
    },
    {
        name: "insertOp3",
        type: "list",
        choices: ["Science", "Commerce", "Arts"],
        message: "Please Select the New Course:"
    }    
    ])
    let indexNum = editData.editNum
    let newIndex = (`Student ID: ${editData.insertOp1}\nStudent Name: ${editData.insertOp2}\nCourses: ${editData.insertOp3}`);
    if(recordMain.length > 0) {
        recordMain.splice(indexNum -1, 1, newIndex);
    } else {
        console.log(chalk.bold.redBright("**No Data Found**"));
    }
    console.clear();
    console.log(chalk.bold.greenBright("*Information has been Updated into the Record*"));
    smsApp()
}

async function deleteRecord() {
    const delRecord = await inquirer.prompt({
        name: "delRecs",
        type: "input",
        message: "Please Enter the Student Data No. you want to Delete:"
    })

    let dataNum = delRecord.delRecs;
    if(recordMain.length > 0) {
        recordMain.splice(dataNum - 1, 1);
    } else {
        console.log(chalk.bold.redBright("**No Record Found**"));
    }
    console.clear()
    console.log(chalk.bold.greenBright("**The Requested Student Data has been Deleted!**"));
    smsApp()
}

smsApp()













































































































































































































// import inquirer, { Answers } from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";

// interface studentinterface {
//     id: number
//     name: string
//     balance: number
//     coursesnrolled: string[]
//     Paidfees: boolean
// }

// interface questioninterface {
//     choice: string
// }

// interface answerinterface {
//     name: string
//     balance: number
//     courses: string
//     payfees: string
// }

// class managementsystem {
//     newstudent: studentinterface = {
//     id: 0,
//     name: "",
//     balance: 0,
//     coursesnrolled: [""],
//     Paidfees: false,
//     }

// students: studentinterface [] = [];
// newstudentbalance: number = 0;
// addnewstudent (newstudent: studentinterface) {
//     this.students = [...this.students, newstudent];
//     this.newstudentbalance = newstudent.balance

// }
// viewbalance () {
//     if (this.students.length == 0){
//         console.log("no students have been enroled")
//         return
//     }
// return this.newstudentbalance
// }
// showStatusOfAllstudents() {
//     if(this.students.length == 0) {
//         console.log("No students have been enroled")
//        return;
//     }
//  this.students.map((stnt) => {
//     console.log(`id ${stnt.id}\nname: ${stnt.name}\nbalance: ${stnt.balance}\nCourses Enrolled ${stnt.coursesnrolled}\nfees status ${stnt.Paidfees}\n`)
//  } )
// } }

// const system = new managementsystem()
// async function main() {
//     const question: questioninterface = await inquirer.prompt([
//         {
//             type: "list",
//             name: "Choice",
//             message: "choice",
//             choices: [
//                 "Enroll new student",
//                 "Display all the students and their details",
//                 "Display the current student balance",
//                 "Exit",
//               ],
        
//         }
//     ])
//     if (question.choice === "enroll new students") {
//          const newstudent: answerinterface = await inquirer.prompt([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "enter your name",
//                 default: "bilal",
//             },  
//             {
//                 type:"number",
//                 name: "balance",
//             }
//          ])
//     }
// }
