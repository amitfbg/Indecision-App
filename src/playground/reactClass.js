//Person class
//name=' ' this is for default name set
class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    };
    getGreeting(){
        return `Hi, i am ${this.name} !`;
    };
    getDetails(){
        return `${this.name} is ${this.age} year's old.`;
    };
}

//subclass
class Students extends Person{
    
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
}

//subclass
class Traveller extends Person{
    constructor(name,age,homeTown){
        super(name,age);
        this.homeTown=homeTown;
    };
    
    getDescription(){
        let detailS=super.getDetails();
        if(this.homeTown){
            detailS+=` Their homeTown is ${this.homeTown}.`;
        }
        return detailS;
    }
    
}

// const me=new Students('Amit',22,'CSE');
// console.log(me);
// console.log(me.getDetails());

// const you=new Person();
// console.log(you.getGreeting());
// console.log(you.getDetails());

const me=new Traveller('Amit',22,'FBG');
console.log(me.getDescription());

const you=new Traveller('Amit',22);
console.log(you.getDescription());
