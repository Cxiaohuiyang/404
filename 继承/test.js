let Persion = function(){
    this.info = {
          name:'',
          gender:{},
          age:0
    };
   this.print = function(){
        console.log(this.info);
    }
}
let Female = function(){ 
}
let Male = function(){
     Persion.apply(this); 
    this.info = {
        a:123
    };
};



Female.prototype = new Persion();
 
var male = new Male();
// male.info.name ='男的';
// male.info.gender.na ="妖精";
// male.info.age =22;

var female= new Female();
female.info.name ="女的";
female.info.gender.na ="女性";
female.info.age =21;

var persion = new Persion();
persion.print(); 
male.print();
female.print();
