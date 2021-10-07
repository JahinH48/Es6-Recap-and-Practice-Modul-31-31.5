const numbers = [12, 31, 25, 23, 24, 154, 25];
const biggestNumber = numbers.filter(x => x > 100);
const biggestNumber1 = numbers.filter(x => x < 30);
// console.log(biggestNumber)
// console.log(biggestNumber1)


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'blue' },
    { name: 'sticky Node', price: 30, color: 'pink' },
    { name: 'water glass', price: 50, color: 'white' },
    { name: 'smart watch', price: 4000, color: 'black' }
]

// const damiProduct = products.filter(x => x.price > 100);

// console.log(damiProduct)

// const blackColor = products.filter(x => x.color == 'black');
// console.log(blackColor);
const blackColorfind = products.find(x => x.color == 'black');
console.log(blackColorfind);
// const whiteItem = products.find(product => product.color == 'black');
// console.log(whiteItem);