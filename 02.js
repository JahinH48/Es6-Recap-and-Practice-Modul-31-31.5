const fish = { id: 58, name: 'king Hilsha', price: 8000, phone: '014712222', address: 'chandpur', dress: 'silver' };
// console.log(fish.phone)

// const { id, price, dress } = fish;

// console.log(id);
// console.log(price);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

const { id, name } = company.ceo;
const { work, framework } = company.web;
const { first, third } = company.web.tech;



console.log(id, name, work, framework, first, third)
