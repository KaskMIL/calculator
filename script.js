import { add, substract, multiply, divide } from './modules/calculator.js';
import { checkNum } from './modules/calcu_elements.js';
//  Display
const operation = document.getElementById("operation");
const result = document.getElementById("result");
// Operators
const btnContainer = document.getElementById('buttons');
const optBtn =document.querySelectorAll('.button-options');
const operBtn = document.querySelectorAll('.button-operator');
// Data
let dataCont = [];
const numberData = [
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
let temp1 = '';
let temp2 = '';

btnContainer.addEventListener('click', (e) => {
    const numTarg = e.target;
    numberData.forEach(element => {
        if (numTarg.id === element.id) {
            if (checkNum(dataCont)) {
                temp1 += element.num
            }
        }
    })
    operBtn.forEach(element => {
        if (e.target.innerHTML === element.innerHTML) {
            console.log(element.id)
        }
    })
    optBtn.forEach(element => {
        if (e.target.innerHTML === element.innerHTML) {
            console.log(element.id)
        }
    })
})