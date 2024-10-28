// IF STATEMENT = if a condition is true, execute some code,
//                if not, do something else

const age = 25;
if(age >= 19){
    console.log('Your old enogh to enter this site')
}else{
    "You must be 18+ to enter this site"
}

let isStudent = false;

if(isStudent){
    console.log("You are a student")
}else{
    console.log("You are not a student")
}

let time = 11

if (time < 12){
    console.log("Good Mornign")
}else if(time > 12){
    console.log('Good afternon')
}else{
    console.log('Good Noon')
}

const ifStatLabel = document.getElementById('if-stat-label');
const ifStatBtn = document.getElementById('if-stat-btn')
const ifStatInput = document.getElementById('if-stat-input');
const ifStatP = document.getElementById('if-stat-p');

let ifStatecont;

ifStatBtn.onclick = () => {
    ifStatecont = ifStatInput.value
    if(ifStatecont < 12){
        ifStatP.textContent = "Good Morning"
    }else if(ifStatecont > 12) {
        ifStatP.textContent = "Good After Noon"
    } else {
        ifStatP.textContent = "Good Noon"
    }
    
}

const myChickBox = document.getElementById('myChickBox');
const myVisa = document.getElementById('myVisa');
const myMasterCard = document.getElementById('myMasterCard');
const myPayPal = document.getElementById("myPayPal");
const mySubmitBtn = document.getElementById('mySubmitBtn');
const mySubP = document.getElementById('mySubP');
const myCardSelP = document.getElementById('myCardSelP');

let myResult;

mySubmitBtn.onclick = () => {
    if(myChickBox.checked){
        mySubP.textContent = "You are Subscribed"
     }else{
        mySubP.textContent = "You are not subscribed"
     } 
    
   if (myVisa.checked) {
    myCardSelP.textContent = "You are paying with Visa"
   } else if(myMasterCard.checked) {
    myCardSelP.textContent = "You are paying with master card"
}else if (myPayPal.checked) {
    myCardSelP.textContent = "You are paying with Paypal"
}else {
    myCardSelP.textContent = "You don't pay any amount"
}
}



