// class Plane {
//     constructor.(numEngines) {
//       this.numEngines = numEngines;
//       this.enginesActive = false;
//     }
  
//     startEngines() {
//       console.log('starting engines…');
//       this.enginesActive = true;
//     }
//   }

//   var rwnair = new Plane(1)
//    console.log(rwnair);
"use strict";

// class Calculates{
//     sum = 0   
//     constructor (a,b){
//         this.a = a;
//         this.b = b;
//     }
        
//   static operations(){
//      this.sum = this.a +this.b;
//      console.log(this.sum);
     
//   }


// }
// let newOperation = new Calculates(4,2);
// Calculates.operations()
// console.log(newOperation.sum);
// console.log(newOperation.sub);


class Person {
  constructor(fristName="john",lastName="Doe",age=0,gender='male'){
    this.fristName = fristName;
    this.lastName =lastName;
    this.age = age;
    this.gender = gender;
  }
    sayFullName(){
      console.log (`${this.fristName} ${this.lastName}`);
    }
    static greetExtraTerrestarials (raceName){
      `Welcome to planet Earth ${raceName}`
    }
  }
  let newp = new Person("keza",'Debo',5,'female');
Person.sayFullName()
Person.greetExtraTerrestarials()