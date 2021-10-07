const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(x => x.length);
// console.log(fLengths);

const output = [];
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'blue' },
    { name: 'sticky Node', price: 30, color: 'pink' },
    { name: 'water glass', price: 50, color: 'white' },
    { name: 'smart watch', price: 4000, color: 'black' }
]


/* for (const product of products) {
    const result = product?.name;
    output.push(result);
}
console.log(output) */

const productsName = products.map(x => x.name);
console.log(productsName)