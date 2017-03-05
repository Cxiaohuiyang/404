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
     // Persion.call(this);  
        console.log('Female');
} 
 Object.setPrototypeOf(Female.prototype,Persion.prototype);
 Object.setPrototypeOf(Female,Persion);
 let f = new Female();
// f.print()


 var promise = new Promise(function(resolve, reject) {
 
  if (false){
    resolve(value);
  } else {
    reject();
  }
});
promise.then(([...a])=>{
   // console.log(a);
},function ([...a]){
    console.log(a)
});