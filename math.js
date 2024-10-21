// random = number generator
const randomLabel = document.getElementById('random-label');
const randdomBtn = document.getElementById('random-btn');
const min = 1;
const max = 100;
let randomNum = '';

randdomBtn.onclick = () => {
    randomNum = Math.floor(Math.random(min)*max)
    randomLabel.textContent = randomNum
}
