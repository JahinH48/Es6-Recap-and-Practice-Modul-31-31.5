class Support {
    name;
    work = 'support Team Deverloper ';
    Address;
    Location = 'Bangladesh';

    constructor(name, Address) {
        this.name = name;
        this.Address = Address;
    }
    Team() {
        console.log(this.name, 'fhatay de Class ke ');
    }

}
const jisan = new Support('jisan', 'Dinajpur');
jisan.Team()

console.log(jisan)

const jahin = new Support('jahin', 'Dinajpur');
jahin.Team()
console.log(jahin);









// programming Hero 

/* class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman); */