import { moduleScopeExample } from "./module-scope.js";

var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

let blockScopeCheck = true

function checkGlobal() {
    var localFunScopeVar = "I am local function scope Var";
    let localFunScopeLet = "I am local function scope Let";
    const localFunScopeConst = "I am local function scope const";
    console.log("inside check",globalVar);
    console.log("inside check",globalLet);
    console.log("inside check",globalConst);

    console.log("inside check",localFunScopeVar);
    console.log("inside check",localFunScopeLet);
    console.log("inside check",localFunScopeConst);

    console.log("inside function check", moduleScopeExample)

   

    if(blockScopeCheck = true){
        var blockScopVar = "I am block-scoped var";
        console.log(blockScopVar)
        console.log("inside block check", moduleScopeExample)
    }
    console.log(blockScopVar)

}

checkGlobal()

console.log("outside checke", globalVar)
console.log("outside checke", globalLet)
console.log("outside checke", globalConst)

console.log("global check", moduleScopeExample)

// console.log("outside checke", localFunScopeVar);
// console.log("outside checke", localFunScopeLet);
// console.log("outside checke", localFunScopeConst)



