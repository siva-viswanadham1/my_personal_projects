class person{
    constructor(_name,_age,_gender){
        this.name=_name;
        this.age=_age;
        this.gender=_gender;
    }
    hi(){
        console.log(`hi iam ${this.name}`);
    }
}
class student extends person{
    #bankaccount;
    constructor(_name,_age,_gender,_group,_year,_bankaccount){
        super(_name,_age,_gender);
        this.group=_group;
        this.year=_year;
        this.#bankaccount=_bankaccount;
    }
    getBankAccount(){
        console.log(this.#bankaccount);
    }
}
let person1=new person('siva',24,'male');
let student1=new student('sathwika','female',22,'EEE',2,1234);
console.log(student1);
person1.hi();
student1.getBankAccount();