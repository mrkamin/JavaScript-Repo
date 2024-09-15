// Global Scope 
// Variables are accessible everywhere in the code

const globalScopeExample = "I am global Scope Example";

const globalScopeExample2 = true; 

console.log("global Scope test", globalScopeExample);

function globalScopeTest(){
    console.log("global Scope test2", globalScopeExample)
    if(globalScopeExample2 === true){
        console.log("global Scope test3", globalScopeExample)
    }
}

globalScopeTest()

// Function Scope

// Block Scope

// Module Scope
