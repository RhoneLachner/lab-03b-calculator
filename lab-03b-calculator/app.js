
const input1 = document.getElementById('add-one');
const input2 = document.getElementById('add-two');
const results = document.getElementById('results');
const operator = document.getElementById('operator');


   


const addButton = document.getElementById('sum-button');
//The add button
addButton.addEventListener('click', () => {
    operator.textContent = '+'

    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) + Number(input2.value)
    console.log(result);
    results.textContent = result;

})


const divideButton = document.getElementById('divide-button');
// The divide button
divideButton.addEventListener('click', () => {
    operator.textContent = '/'
    
    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) / Number(input2.value)
    console.log(result);
    results.textContent = result;

})


const multiplyButton = document.getElementById('multiply-button');
//The Multiply button
multiplyButton.addEventListener('click', () => {
    operator.textContent = '*'

    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) * Number(input2.value)
    console.log(result);
    results.textContent = result;

})


const subtractButton = document.getElementById('subtract-button');

addButton.addEventListener('click', () => {
    operator.textContent = '-'
//The subtract button
    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) - Number(input2.value)
    console.log(result);
    results.textContent = result;

})




const myInput = document.getElementById('my-special-input');
