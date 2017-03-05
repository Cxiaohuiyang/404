let private_fun = 'private_fun'
class Person {
    constructor(){
        this.info = {
            name:'',
            gender:'',
            age:0
        };
    } 
    print(){
        console.log(this.private_fun());
            console.log(this.info);
    } 
    [private_fun](){
        console.log('xxxxxx');
    } 
}

class Male extends Person{
    constructor (){
        super();
        this.info = {
            a:123213
        }
    }
}

class Female extends Person{
    constructor (){
        super();
    }
}

var male = new Male();
// male.info.name ='男的';
// male.info.gender ='男性';
// male.info.age =22; 


var female= new Female();
female.info.name ="女的";
female.info.gender ="女性";
female.info.age =21;

var persion = new Person();

persion.print();
male.print();
female.print();
