'use strict';


let Input ;
function checkInput(Input){
   
    if (Input =='' ) {
     
       return console.log('Invalid');
    }
    else
    {
       return console.log(Input);
    }
    
};

function genderType(string) {
    switch(gender){
        case 'female':
           return 'Ms';
            break;
        case 'male':
            return 'Mr';
            
            break;
            case null:
               console.log ('Invalid');
                
                break;
        default:
            return ' ';
    }
    
 };
let person = prompt("Please enter your name");

checkInput(person);

let gender = prompt(" Hello  "+person +" Please enter your Gender (female or male )");

checkInput(gender);
if ((gender != 'female') && (gender != 'male'))
{
gender='Invalid'
}
 
let age =  prompt("Insert Your age ");

checkInput(age);
if(age<=0){
    alert("Invalid! the age should be more than zero !!");
}

let welcomeMessage =confirm("Do you like To skip A Welcome Message !");

if (welcomeMessage ==false){
    alert(" Hello  "+genderType(gender)+" "+ person +" Welcome to Our Web site , I hope You Will Enjoy !)");
    
console.log(welcomeMessage);
}
let res1=confirm( " DO you have  a dream ?");


let res2=confirm( " DO you start draw a plane to achive this dream  ?");

let res3=confirm( " DO you want a help for planning ?");




 let arrUser=[person,gender,age ,welcomeMessage,res1,res2,res3];
 console.log(arrUser);

for(let i=0; i< arrUser.length; i++){
    console.log(arrUser[i])
}
