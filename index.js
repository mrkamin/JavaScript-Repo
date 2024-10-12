let count = 0;

document.getElementById('decrease').onclick = () => {
    count--
    document.getElementById("mylabel").textContent = count
}

document.getElementById('increase').onclick = () => {
    count++
    document.getElementById("mylabel").textContent = count
}

document.getElementById('reset').onclick = () => {
    count = 0
    document.getElementById("mylabel").textContent = count
}