#! /usr/bin/cnv node   
import inquirer from "inquirer"

let myBalance = 50000;
let accountPin:number = 1111;

let Pin = await inquirer.prompt({
message:"Please enter your AccountPin", type: "number", name:"pin"
})
if(Pin.pin === accountPin){
    console.log("Welcome to your account!");

    let operation = await inquirer.prompt({
        message: "What you want to do?",
         type: "list",
          name: "options",
           choices:["1) Pay bills","2) Mobile load & bundles","3) Send Money","4) ReadyCash", "5) Payments",
            "6) Saving & Insurance","7) My Account", "8) Customer Support"]})

                          //1st operation Pay bills starts here

    if(operation.options === "1) Pay bills"){
          
          let pay= await inquirer.prompt({
            message:"Select Option", 
            type: "list",
            name: "bills",
            choices: ["1) Electricity", "2) Gas","3) Water","4) Telephone","5) Internet"]})

          //One operation start here
        if(pay.bills === "1) Electricity"){
            let electrion = await inquirer.prompt({
             message: "Enter Your Customer Number",
             type: "number",
             name: "CustomerNumber",
             
            })
            if (electrion.CustomerNumber == electrion.CustomerNumber){
                let payammount = await inquirer.prompt({
                    message: "Enter Your Bill amount", 
                    type: "number",
                    name: "BilAmount",})

                    if(payammount.BilAmount <= myBalance){
                        let ElectricPayment = myBalance - payammount.BilAmount
                        console.log("Your Electricity bill Have Been Paid Successfully!");
                        console.log(`Your Remaining Balance is ${ElectricPayment}`);
                        
                    }else{console.log("Insufficient Balance!")}
                    
                

            }else{console.log("Invalid Customer Number")}
        }
        //One opoeration ends here

        //Sec operation start here

        if(pay.bills === "2) Gas"){
            let gass = await inquirer.prompt({
             message: "Enter Your Customer Number",
             type: "number",
             name: "CustomerNumber",
             
            })
            if (gass.CustomerNumber == gass.CustomerNumber ){
                let gasammount = await inquirer.prompt({
                    message: "Enter Your Bill amount", 
                    type: "number",
                    name: "BilAmount",})

                    if(gasammount.BilAmount <= myBalance){
                        let GasPayments = myBalance - gasammount.BilAmount
                        console.log("Your Gas bill Have Been Paid Successfully!");
                        console.log(`Your Remaining Balance is ${GasPayments}`);
                        
                    }else{console.log("Insufficient Balance!")}

                }else{console.log("Invalid Customer Number")};    
                    
            } 
        //sec operation ends here
         
        //third operation start here

        
        if(pay.bills === "3) Water"){
            let water = await inquirer.prompt({
             message: "Enter Your Customer Number",
             type: "number",
             name: "CustomerNumber",
             
            })
            if (water.CustomerNumber == water.CustomerNumber){
                let waterammount = await inquirer.prompt({
                    message: "Enter Your Bill amount", 
                    type: "number",
                    name: "BilAmount",})

                    if(waterammount.BilAmount <= myBalance){
                        let waterPayment = myBalance - waterammount.BilAmount
                        console.log("Your Water bill Have Been Paid Successfully!");
                        console.log(`Your Remaining Balance is ${waterPayment}`);
                        
                    }else{console.log("Insufficient Balance!")}

                }else{console.log("Invalid Customer Number")};    
                    
            } 

        //third operation ends here
        // fourth operation starts here

 
        if(pay.bills === "4) Telephone"){
            let telephone = await inquirer.prompt({
             message: "Enter Your Customer Number",
             type: "number",
             name: "CustomerNumber",
             
            })
            if (telephone.CustomerNumber == telephone.CustomerNumber){
                let TelephoneAmmount = await inquirer.prompt({
                    message: "Enter Your Bill amount", 
                    type: "number",
                    name: "BilAmount",})

                    if(TelephoneAmmount.BilAmount <= myBalance){
                        let waterPayment = myBalance - TelephoneAmmount.BilAmount
                        console.log("Your Telephone bill Have Been Paid Successfully!");
                        console.log(`Your Remaining Balance is ${waterPayment}`);
                        
                    }else{console.log("Insufficient Balance!")}

                }else{console.log("Invalid Customer Number")};    
                    
            } 
            // fourth operation ends here
            // fifth operation starts here
            
        if(pay.bills === "5) Internet"){
            let Internet = await inquirer.prompt({
             message: "Enter Your Customer Number",
             type: "number",
             name: "CustomerNumber",
             
            })
            if (Internet.CustomerNumber == Internet.CustomerNumber){
                let InternetAmmount = await inquirer.prompt({
                    message: "Enter Your Bill amount", 
                    type: "number",
                    name: "BilAmount",})

                    if(InternetAmmount.BilAmount <= myBalance){
                        let waterPayment = myBalance - InternetAmmount.BilAmount
                        console.log("Your Internet bill Have Been Paid Successfully!");
                        console.log(`Your Remaining Balance is ${waterPayment}`);
                        
                    }else{console.log("Insufficient Balance!")}

                }else{console.log("Invalid Customer Number")};  

    }
        // fifth operation ends here
    
}
                             //1st operation Pay bills ends here

                           //2nd operation Mobile loads & bundles starts here

if(operation.options === "2) Mobile load & bundles"){
    let networkType = await inquirer.prompt({
        message: "Select Network",
        type: "list",
        name: "network",
        choices: ["1) Jazz Load", "2) Telenor Load", "3) Zong Load", "4) Ufone Load",]})
    
        
        
        //first operation starts here
         if (networkType.network === "1) Jazz Load" ) {
             let phone = await inquirer.prompt({
                 message: "Enter Your Phone Number",
                 type: "number",
                 name: "PhoneNumber"})
                
                 if(phone.PhoneNumber === phone.PhoneNumber) {

                 let balance = await inquirer.prompt({
                    message: "Enter your ammount!",
                    type: "number",
                    name: "Ammount"})
                if(balance.Ammount <= myBalance){
                    let balancing = myBalance - balance.Ammount
                     console.log(`Your balance ${balance.Ammount} have been paid successfully!`)
                     console.log(`your remaining balance is ${balancing}`);
                     
                    
                   }else{console.log("Insufficient balance")}
                               
             }else{"Invalid Number"}
            }
            //first operation ends here
            
            //second operation starts here
            if (networkType.network === "2) Telenor Load" ) {
                let phone = await inquirer.prompt({
                    message: "Enter Your Phone Number",
                    type: "number",
                    name: "PhoneNumber"})
                   
                    if(phone.PhoneNumber === phone.PhoneNumber) {
   
                    let balance = await inquirer.prompt({
                       message: "Enter your ammount!",
                       type: "number",
                       name: "Ammount"})
                   if(balance.Ammount <= myBalance){
                       let balancing = myBalance - balance.Ammount
                        console.log(`Your balance ${balance.Ammount} have been paid successfully!`)
                        console.log(`your remaining balance is ${balancing}`);
                        
                       
                      }else{console.log("Insufficient balance")}
                                  
                }else{"Invalid Number"}
               }
                 //second operation ends here


                 //third operation starts here
                 if (networkType.network === "3) Zong Load" ) {
                    let phone = await inquirer.prompt({
                        message: "Enter Your Phone Number",
                        type: "number",
                        name: "PhoneNumber"})
                       
                        if(phone.PhoneNumber === phone.PhoneNumber) {
       
                        let balance = await inquirer.prompt({
                           message: "Enter your ammount!",
                           type: "number",
                           name: "Ammount"})
                       if(balance.Ammount <= myBalance){
                           let balancing = myBalance - balance.Ammount
                            console.log(`Your balance ${balance.Ammount} have been paid successfully!`)
                            console.log(`your remaining balance is ${balancing}`);
                            
                           
                          }else{console.log("Insufficient balance")}
                                      
                    }else{"Invalid Number"}
                   }
                 //third operation ends here


                 
                 //fourth operation starts here
                 if (networkType.network === "4) Ufone Load" ) {
                    let phone = await inquirer.prompt({
                        message: "Enter Your Phone Number",
                        type: "number",
                        name: "PhoneNumber"})
                       
                        if(phone.PhoneNumber === phone.PhoneNumber) {
       
                        let balance = await inquirer.prompt({
                           message: "Enter your ammount!",
                           type: "number",
                           name: "Ammount"})
                       if(balance.Ammount <= myBalance){
                           let balancing = myBalance - balance.Ammount
                            console.log(`Your balance ${balance.Ammount} have been paid successfully!`)
                            console.log(`your remaining balance is ${balancing}`);
                            
                           
                          }else{console.log("Insufficient balance")}
                                      
                    }else{"Invalid Number"}
                   }
                 //fourth operation ends here
                }

                          //2nd operation Mobile loads & bundles ends here


                          //7th operation starts here
                           if(operation.options === "7) My Account"){
                            let account = await inquirer.prompt({
                                   message: "Please select to cheak your balance.",
                                   type: "list",
                                   name: "balance",
                                   choices: ["1) Cheak Balance"]})
                                   if(account.balance === "1) Cheak Balance"){
                                    console.log(myBalance);}};
                                    
                                   
                           


}else{console.log("Invalid Passsword")}
