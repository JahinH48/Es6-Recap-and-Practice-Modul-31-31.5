class Top {
    name;
    work = 'support Team Deverloper ';
    Address;
    Location = 'Bangladesh';

    constructor(name, Address) {
        this.name = name;
        this.Address = Address;
    }
}

class Support extends Top {

    Team(name, Address, version) {
        super(name, Address)
        console.log(this.name, 'fhatay de Class ke ');
    }
}


class NepchunApps extends Top {
    virsionNumber;
    Team(name, Address, version) {

        super(name, Address)
        this.virsionNumber = version;
        console.log(this.name, 'fhatay de Class ke ');
    }

}
const jisan = new Support('jisan', 'Dinajpur', 11.3);
jisan.Team()

/* const jisan = new Support('jisan', 'Dinajpur');
jisan.Team() */

console.log(jisan)

/* const jahin = new Support('jahin', 'Dinajpur');
jahin.Team()
console.log(jahin); */

// Programming Hero 
/* class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash.name); */