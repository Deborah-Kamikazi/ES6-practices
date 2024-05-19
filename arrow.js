"use strict";

function IceCream() {
    this.scoops = 0;

}

// adds scoop to ice cream
IceCream.prototype.addScoop = ()=> { // addScoop is now an arrow function
  setTimeout(() => {
      console.log(this.scoops);
      this
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  
  // methods "inherited" by all instances
  Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
  };
  
  var richardsPlane = new Plane(1);
  console.log(richardsPlane.enginesActive);
  richardsPlane.startEngines();

  
  var x = 10;
  if (x == 10) {
    let x = 20;
      console.log(x); 
  }
  console.log(x); // 10: reference at the begining of the script