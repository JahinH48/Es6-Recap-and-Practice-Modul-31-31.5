const numbers = [7, 5, 9, 74];
// const output = [];

// const doubleit = number => number * 2;

/* for (const number of numbers) {
    const result = doubleit(number);
    output.push(result);
} */

// const output1 = numbers.map(doubleit)
const output1 = numbers.map(x => x * 2)
const output2 = numbers.map(x => x * x)
console.log(output1)
console.log(output2)
/*
for (const number of numbers) {
    const result = number * 2;
    output.push(result);
} */
// console.log(output)