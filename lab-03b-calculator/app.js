const addButton = document.getElementById('sum-button');

addButton.addEventListener('click', () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');

    console.log(input1.value);
    console.log(input2.value);
    // post-click logic goes here!
    console.log(Number(input1.value) + Number(input2.value));
    const resultspan = 'sum-result';
})

const myInput = document.getElementById('my-special-input');
