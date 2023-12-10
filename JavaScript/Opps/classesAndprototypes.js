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
let person1=new person('siva',24,'male');
person1.hi();