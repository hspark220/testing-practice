const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const ceasarCipher = require('./ceasarCipher');
const analyzeArray = require('./analyzeArray');


//capitalize tests
test('hello world => Hello world', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('jasper park => Jasper park', () => {
    expect(capitalize('jasper park')).toBe('Jasper park');
});

//reverse string tests
test('hello world => dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('jasper park => krap repsaj', () => {
    expect(reverseString('jasper park')).toBe('krap repsaj');
});

//calculator tests
test('1 + 2 = 3', () => {
    expect(calculator.sum(1,2)).toBe(3);
});

test('3 + 4 = 7', () => {
    expect(calculator.sum(3,4)).toBe(7);
});

test('7 - 4 = 3', () => {
    expect(calculator.subtract(7,4)).toBe(3);
});

test('9 - 1 = 8', () => {
    expect(calculator.subtract(9,1)).toBe(8);
});

test('2 * 3 = 6', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});

test('3 * 9 = 27', () => {
    expect(calculator.multiply(3,9)).toBe(27);
});

test('4 / 2 = 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

test('36 / 9 = 4', () => {
    expect(calculator.divide(36,9)).toBe(4);
});

//ceasarCipher
test('testing for basic encryption and wrap with alphabet', () => {
    expect(ceasarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('testing for words with spaces', () => {
    expect(ceasarCipher('Hello World',5)).toBe('Mjqqt Btwqi');
});

//analyzeArray
test('testing for the average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('testign for the min value', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('testing for the max value', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('testing for the length of array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
