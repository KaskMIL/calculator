import { add, substract, multiply, divide } from './modules/calculator.js'
// Display
const operation = document.getElementById("operation");
const result = document.getElementById("result");
//Options
const clear = document.getElementById("delete");
const back = document.getElementById("back");
const eqResult = document.getElementById("equal");
//Operators

const btnContainer = document.getElementById('buttons');
const optBtn =document.querySelectorAll('.button-options');
const operBtn = document.querySelectorAll('.button-operator');
const numBtn =document.querySelectorAll('.button-number');

btnContainer.addEventListener('click', (e) => {
    numBtn.forEach(element => {
        if (e.target.innerHTML === element.innerHTML) {
            console.log(parseInt(element.innerHTML))
        }
    })
    operBtn.forEach(element => {
        if (e.target.innerHTML === element.innerHTML) {
            console.log(element.innerHTML)
        }
    })
    optBtn.forEach(element => {
        if (e.target.innerHTML === element.innerHTML) {
            console.log(element.innerHTML)
        }
    })
})