const PI = 3.14159;
let radius;
let circumference;


document.getElementById("myBtn").onclick = () => {
    document.getElementById('myInput').ariaValueMax;
    radius = Number(radius);
    circumference = 2* PI* radius;
    document.getElementById('myH3').textContent = circumference + 'cm'
}