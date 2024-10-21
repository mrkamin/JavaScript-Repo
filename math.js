// random = number generator
const randoLabel = document.getElementById('random-label');
const randdomBtn = document.getElementById('random-btn');
const min = 1;
const max = 100;
let randomNum = '';

randdomBtn.onclick = () => {
    const myrandom = Math.floor(Math.random(min)*max)
    console.log(myrandom)
    randomNum = myrandom
    randoLabel.textContent = randomNum
}
