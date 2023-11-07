import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";


// Customer Class
class Customer{
    firstName: string;
    lastName: string;
    age : number;
    gender: string;
    mobnumber:number;
    accnumber:number;

    constructor(
        fname:string,
        lname:string,
        age:number,
        gender:string,
        mob:number,
        acc:number
        ){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.gender = gender;
        this.mobnumber = mob;
        this.accnumber = acc;
    }

}

// Interface BankAccount

interface BankAccount{
    accNumber : number,
    balance :  number,
}

//class Bank 

class Bank{
    customer: Customer[] = [];
    account: BankAccount[] = [];

    addCustomer(obj:Customer){
      this.customer.push(obj);
    }

    addAccountNumber(obj:BankAccount){
      this.account.push(obj);
    }
    transcation(accObj:BankAccount){
      let NewAccounts = this.account.filter(acc => acc.accNumber !== accObj.accNumber);
      this.account = [...NewAccounts,accObj];
    }
}

let myBank = new Bank();

// customer Create

for(let i:number = 1; i<= 3; i++){
 let fName = faker.person.firstName(`male`)
 let lname = faker.person.lastName()
 let num = parseInt(faker.phone.number("501-039-841"));
 const cus = new Customer(fName,lname,25*i,"male",num,1000+i)
  myBank.addCustomer(cus);
  myBank.addAccountNumber({accNumber: cus.accnumber,balance:100 * i});
}

// Bank functionality 

async function bankservice(bank:Bank) {
  let service = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Please Select Your Service",
    choices:["view Blance","Cash Withdraw","cash Deposit"]
  
});

    // View Balance

if (service.select == "view Blance"){
   let res = await inquirer.prompt({
    type:"input",
    name:"num",
    message:"Please Enter Your Account Number:",
   });
   let account = myBank.account.find((acc)=>acc.accNumber == res.num)
   if(!account){
    console.log(chalk.red.bold("Invalid Account Number"));
   }
   if (account){
    let name = myBank.customer.find((item) => item.accnumber == account?.accNumber);
    console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)}
    Your Account Blance Is ${chalk.bold.blueBright("$",account.balance)}`)
   }
}

   //  cash Withdraw
   if (service.select == "Cash Withdraw"){
    let res = await inquirer.prompt({
      type:"input",
      name:"num",
      message:"Please Enter Your Account Number:",
     });
     let account = myBank.account.find((acc)=>acc.accNumber == res.num)
     if(!account){
      console.log(chalk.red.bold("Invalid Account Number"));
     }
     if (account){
      let ans = await inquirer.prompt({
        type: "number",
        message: "Please Enter Your Amount.",
        name:"rupee",
      });
      if(ans.rupee > account.balance){
          console.log(chalk.red.bold("Mojuda Blance Nakafi Hia...."))
      }

      let newBlance = account.balance - ans.rupee
        // transation Method Call
        bank.transcation({accNumber:account.accNumber,balance:newBlance});
        
     }
  
}
   // Cash Deposit
  
   if (service.select == "Cash Deposit"){
    let res = await inquirer.prompt({
      type:"input",
      name:"num",
      message:"Please Enter Your Account Number:",
     });
     let account = myBank.account.find((acc)=>acc.accNumber == res.num)
     if(!account){
      console.log(chalk.red.bold("Invalid Account Number"));
     }
     if (account){
      let ans = await inquirer.prompt({
        type: "number",
        message: "Please Enter Your Amount.",
        name:"rupee",
      });
      let newBlance = account.balance + ans.rupee
        // transation Method Call
        bank.transcation({accNumber:account.accNumber,balance:newBlance});
     }
  
}
}
  bankservice(myBank);


































































































































































































// import { Faker, faker } from "@faker-js/faker";
// import inquirer from "inquirer";
// import chalk from "chalk";

// class Customer {
//     firstname: string;
//     lastname:string;
//     age: number;
//     gender: string;
//     mobnumber: number;
//     accnumber: number;

//     constructor (
//         fname:string,
//         lname:string,
//         age:number,
//         gender:string,
//         mob:number
//         ,acc:number
//      ) {
        
//         this.firstname = fname
//         this.lastname = lname
//         this.age = age
//         this.gender = gender
//         this.mobnumber = mob
//         this.accnumber =acc
//     }
// }
// interface BankAccount {
//     accnumber: number,
//     balance: number,
// }

// class Bank {
//     customer: Customer [] = [];
//     account: BankAccount [] = [];

//     addCustomer(obj:Customer){
//          this.customer.push(obj)
//     }

//     addAccountNumber(obj:BankAccount){
//         this.account.push(obj)
//     }
// }

// let myBank = new Bank();

// for (let i:number = 1; i<=2; i++){
// let fname = faker.person.firstName("male")
// let lname = faker.person.lastName()
// let num = parseInt(faker.phone.number("3##########"))
// const cus = new Customer(fname,lname,20*i, "male",num,1000+i)
// myBank.addCustomer(cus)
// myBank.addAccountNumber({accnumber:cus.accnumber,balance:1000*i})

// }

// async function BankService(bank:Bank) {
//     let service = await inquirer.prompt({
//         type: "list",
//         name: "select",
//         message: "please select the service",
//         choices: ["view balance","cash withdraw","cash Deposit"]
//     })
//     if (service.select == "view balance"){
//         let res = await inquirer.prompt({
//             type: "input",
//             name: "num",
//             message:"please enter your account number",
//         })
//         let account = myBank.account.find((acc)=>acc.accnumber == res.num)
//         if (!account){
//             console.log(chalk.red.bold.italic("Invalid account number"))
//         }
//     }
//     if (service.select == "cash withdraw"){
//         console.log("cash withdraw")
//     }
//     if (service.select == "cash Deposit"){
//         console.log("cash Deposit")
//     }
// }
// BankService(myBank)