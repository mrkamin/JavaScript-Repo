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



