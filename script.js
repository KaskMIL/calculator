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

let dataCont = [];
const numData = [
    {id: 'zero', num: 0},
    {id: 'one', num: 1},
    {id: 'two', num: 2},
    {id: 'three', num: 3},
    {id: 'four', num: 4},
    {id: 'five', num: 5},
    {id: 'six', num: 6},
    {id: 'seven', num: 7},
    {id: 'eigth', num: 8},
    {id: 'nine', num: 9}
];

btnContainer.addEventListener('click', (e) => {
    const numTarg = e.target;
    numData.forEach(element => {
        if (numTarg.id === element.id) {
            console.log(element.num)
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