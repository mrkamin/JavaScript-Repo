let count = 0;

document.getElementById('decrease').onclick = () => {
    count--
    console.log(count)
    document.getElementById("mylabel").textContent = count
}



