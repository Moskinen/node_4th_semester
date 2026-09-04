// "use strict";

// totalGlobalVariable = "Never EVER do this";

// console.log(totalGlobalVariable)

// const public = "This is a public variable"

var globalVariable = "This variable is in a global scope"

//var "bløder ud" i andre scope og kan derfor ændres i forskellige filer

{ // block scope
    var someValue = 123;
    {
        var someValue = 456;
    }    
    console.log(someValue)
}

//let kan ændre sig, men altid indenfor scope
{
    let someOtherValue = true;
    {
        let someOtherValue = false;
    }
    console.log(someOtherValue);
}

// Printer 6, 6 gange, fordi variablen ikke er bundet til scopet
// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

