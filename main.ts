import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
);
if (pinAnswer.pin === myPin) {
console.log("correct pin code !!!")


let operationAns = await inquirer.prompt(
[
    {
        name:"operation",
        message: "please select option",
        type: "list",
        choices: ["fast cash", "withdraw", "check balance"]
    }
]
);
console.log(operationAns);

if (operationAns.operation === "fast cash") {
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select",
                type: "list",
                choices: [1000, 2000, 5000]
            }
        ]
    );


if (operationAns.operation === 1000)
    { myBalance -= 1000;
    
   console.log("your remaining balance is:" + myBalance)
    } else if (operationAns.operation === 2000)
    { myBalance -= 2000;
    
   console.log("your remaining balance is:" + myBalance)
} else if (operationAns.operation === 5000)
    { myBalance -= 5000;
    }
   console.log("your remaining balance is:" + myBalance)
} 


if (operationAns.operation === "withdraw") {
let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]
);

if (amountAns.amount > myBalance)
    console.log("Insufficient funds");
 else { myBalance -= amountAns.amount;
 }
console.log("your remaining balance is: " + myBalance)
 
} else if (operationAns.operation === "check balance") {
    // console.log(`Your remaining balance is: ${myBalance}`);
    console.log("your balance is : " + myBalance);
};
}

else {
    console.log("Incorrect pin number");
}
