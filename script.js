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
    add: function () {
        this.result =  parseInt(this.firstNumber) + parseInt(this.secondNumber);
    },
    substract: function () {
        this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber)
    },
    multiply: function(){
        this.result =  parseInt(this.firstNumber) * parseInt(this.secondNumber);
    },
    divide: function(){
            this.result = (parseInt(this.firstNumber)/parseInt(this.secondNumber)).toFixed(2);
    }
};

function numPressed(){
    operation.innerHTML = "";
    operation.innerHTML = `${calculator.firstNumber} ${calculator.operation} ${calculator.secondNumber}`
}

function resPressed(){
    result.innerHTML = calculator.result;
}

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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
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
    numPressed();
});

//Adding operators to the object

add.addEventListener("click", e =>{
    calculator.operation = "+";
    numPressed();
});
substract.addEventListener("click", e =>{
    calculator.operation = "-";
    numPressed();
});
multiply.addEventListener("click", e =>{
    calculator.operation = "*";
    numPressed();
});
divide.addEventListener("click", e =>{
    calculator.operation = "/";
    numPressed();
});

//Adding options

function backspace (num){
    let nuevo = num.slice(0 , -1);
    return nuevo;
};

clear.addEventListener("click", e =>{
    calculator.firstNumber = "";
    calculator.secondNumber = "";
    calculator.operation = "";
    calculator.result = "";
    operation.innerHTML = "";
    result.innerHTML = "";
});

back.addEventListener("click", e =>{
    if(calculator.result == ""){
        if(calculator.operation == ""){
            let sliceNum = backspace(calculator.firstNumber);
            calculator.firstNumber = sliceNum;
        }
        else if(calculator.operation != "" && calculator.secondNumber == ""){
            calculator.operation = "";
        }
        else{
            let sliceNum = backspace(calculator.secondNumber);
            calculator.secondNumber = sliceNum;
        }
    }
    numPressed();
});

eqResult.addEventListener("click", e => {
    if(calculator.operation == "+"){
        calculator.add();
    }
    else if(calculator.operation == "-"){
        calculator.substract();
    }
    else if(calculator.operation == "*"){
        calculator.multiply();
    }
    else{
        if(calculator.secondNumber == "0"){
            calculator.result = "error"
        }
        else{
            calculator.divide();
        }
    }

    resPressed();
})