// 1 . let and const 

const hubby = 'jisan';
let phone = 'iphone';
phone = 'Samsung Galaxy';

// 2 . default parameter 

function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest)
// 3. template string 
const myNote = `I am mojnu of ${hubby}. i dont have ${phone} `;

// 4  arrow function 

const square = x => x * x;
console.log(square(2))



