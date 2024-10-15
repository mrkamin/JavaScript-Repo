const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const myLabel =  document.getElementById("mylabel");
let count = 0;

decrease.onclick = () => {
    count--
   myLabel.textContent = count
}

increase.onclick = () => {
    count++
    myLabel.textContent = count
}

reset.onclick = () => {
    count = 0
    myLabel.textContent = count
}