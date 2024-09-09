let userName;
document.getElementById('mybtn').onclick = function(){
    userName = document.getElementById('myInput').value;
    console.log(`Clicked ${userName}`)
    document.getElementById('myH1').textContent = userName;
}