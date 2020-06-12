

export function add(input1, input2){
const sum = (input1 + input2)
return sum;
}


export function subtract(input1, input2){

    operator.textContent = '-'

    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) - Number(input2.value)
    console.log(result);
    results.textContent = result;
}


export function multiply(input1, input2){

    operator.textContent = '*'

    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) * Number(input2.value)
    console.log(result);
    results.textContent = result;
}


export function divide(input1, input2){

    operator.textContent = '/'
    
    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    const result = Number(input1.value) / Number(input2.value)
    console.log(result);
    results.textContent = result;
}

