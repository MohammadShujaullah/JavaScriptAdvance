class Animal{
   constructor(name,legs,speaks){
    this.name=name;
    this.leg=legs;
    this.speaks=speaks;
   }

   static mytype(){
    console.log(" i am animal")    // only related to class or animal ,not its objects
   }
   speaked(){
    console.log(this.name+"speaking "+this.speaks)
   }
}
let dog=new Animal("puppy",2,"bark");
let cat=new Animal("filix",2,"meow");  // creating AN object 
console.log(dog.speaks)
console.log(cat.speaks)     
console.log(dog.name)
dog.speaked(); //call function on object 

Animal.mytype();