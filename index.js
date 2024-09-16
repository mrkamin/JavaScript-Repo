// Global Scope 
// Variables are accessible everywhere in the code

// const globalScopeExample = "I am global Scope Example";

// const globalScopeExample2 = true; 

// console.log("global Scope test", globalScopeExample);

// function globalScopeTest(){
//     console.log("global Scope test2", globalScopeExample)
//     if(globalScopeExample2 === true){
//         console.log("global Scope test3", globalScopeExample)
//     }
// }

// globalScopeTest()

// Function Scope

function functionScopeTest(){
   const functionScopeTestVarible = "I am Function scope";
    console.log("function scope test inside function", functionScopeTestVarible);
}
functionScopeTest()

console.log("function scope test outside function", functionScopeTestVarible);
// Block Scope

// Module Scope
