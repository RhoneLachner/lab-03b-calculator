// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { add, subtract, divide, multiply } from '../mthutilities.js'

const test = QUnit.test;

test('time to test a function', function(expect) {
    //Arrange

const input1 = 8;
const input2 = 2;
const expected = 10;
    
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(input1,input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});



test('time to test a function', function(expect) {
    //Arrange

const input1 = 8;
const input2 = 2;
const expected = 4;
    
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(input1,input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});



test('time to test a function', function(expect) {
    //Arrange

const input1 = 8;
const input2 = 2;
const expected = 16;
    
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(input1,input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});



test('time to test a function', function(expect) {
    //Arrange

const input1 = 8;
const input2 = 2;
const expected = 6;
    
 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(input1,input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});
