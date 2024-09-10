let age = window.prompt("How old are you?");
age+=1
console.log(age, typeof age) // 251 string

let age2 = window.prompt("How old are you?");

age2 = Number(age2);

age2+=1;

console.log(age2, typeof age2) // 26 'number'