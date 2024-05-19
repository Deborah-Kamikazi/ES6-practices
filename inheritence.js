class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Shark extends Animal {
    constructor(name,age,status,legs=0, species = "shark") {
      super(name,age,status);
      this.legs = legs;
      this.species = species;
    }
  }
  
  class Cat extends Animal {
     constructor(name,age,status,legs=4, species = "cat") {
      super(name,age,status);
      this.legs = legs;
      this.species = species;
       }
    introduce(){
         return  `${super.introduce()}  Meow meow!`;
       }
    }
  
  class Dog extends Animal {
    constructor(name,age,status,master="Bob",legs = 4, species = "dog") {
      super(name,age,status);
      this.master = master;
      this.legs = legs;
      this.species = species; }
    
    introduce(){
       return `${super.introduce()}`
         
       }
    greetMaster(){
      return "Hello"+this.master;
    }
    
  }

  