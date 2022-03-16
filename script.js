// Display
const operation = document.getElementById("operation");
const result = document.getElementById("result");
//Options
const clear = document.getElementById("delete");
const back = document.getElementById("back");
const eqResult = document.getElementById("equal");
//Operators
const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
//numbers
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");

let calculator = {
    firstNumber: "",
    secondNumber: "",
    operation: "",
    result: "",
    add: function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },
    substract: function (firstNumber, secondNumber) {
        let max = Math.max(arguments[0], arguments[1]);
        let min = Math.min(arguments[0], arguments[1]);
        return max - min;
    },
    multiply: function(firstNumber, secondNumber){
        return firstNumber * secondNumber;
    },
    divide: function(firstNumber, secondNumber){
        if(secondNumber!=0){
            return toFixed(firstNumber/secondNumber);
        }
    }
};

//Adding numbers to the object
zero.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "0";
        }
        else{
            calculator.firstNumber+= "0"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "0"
        }
        else{
            calculator.secondNumber += "0"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
one.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "1";
        }
        else{
            calculator.firstNumber+= "1"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "1"
        }
        else{
            calculator.secondNumber += "1"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
two.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "2";
        }
        else{
            calculator.firstNumber+= "2"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "2"
        }
        else{
            calculator.secondNumber += "2"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
three.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "3";
        }
        else{
            calculator.firstNumber+= "3"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "3"
        }
        else{
            calculator.secondNumber += "3"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
four.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "4";
        }
        else{
            calculator.firstNumber+= "4"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "4"
        }
        else{
            calculator.secondNumber += "4"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
five.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "5";
        }
        else{
            calculator.firstNumber+= "5"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "5"
        }
        else{
            calculator.secondNumber += "5"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
six.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "6";
        }
        else{
            calculator.firstNumber+= "6"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "6"
        }
        else{
            calculator.secondNumber += "6"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
seven.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "7";
        }
        else{
            calculator.firstNumber+= "7"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "7"
        }
        else{
            calculator.secondNumber += "7"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
eigth.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "8";
        }
        else{
            calculator.firstNumber+= "8"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "8"
        }
        else{
            calculator.secondNumber += "8"
        }
    }
    console.log(calculator.firstNumber,calculator.secondNumber)
})
nine.addEventListener("click", e =>{
    if(calculator.operation == ""){
        if(calculator.firstNumber == ""){
            calculator.firstNumber = "9";
        }
        else{
            calculator.firstNumber+= "9"
        }
    }
    else{
        if(calculator.secondNumber == ""){
            calculator.secondNumber = "9";
        }
        else{
            calculator.secondNumber += "9"
        };
    };
    console.log(calculator.firstNumber,calculator.secondNumber)
});

//Adding operators to the object

add.addEventListener("click", e =>{
    calculator.operation = "add";
    console.log(calculator.operation)
});
substract.addEventListener("click", e =>{
    calculator.operation = "substract";
    console.log(calculator.operation)
});
multiply.addEventListener("click", e =>{
    calculator.operation = "multiply";
    console.log(calculator.operation)
});
divide.addEventListener("click", e =>{
    calculator.operation = "divide";
    console.log(calculator.operation)
});

//Adding options

clear.addEventListener("click", e =>{
    calculator.firstNumber = "";
    calculator.secondNumber = "";
    calculator.operation = "";
});
back.addEventListener("click", e =>{
    
})