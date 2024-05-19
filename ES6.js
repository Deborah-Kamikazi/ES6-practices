// const fName = "kamikazi";
// const lName = "Deorah";
// const names = `${fName}-${lName}`;
// console.log(names)


// const sentence = `${fName} said that "my second name is"${lName}`;
// console.log(sentence);

// // desturcting
// // arrays

// const array1 = ['kami','keza','kalinda','kabandana'];
// let [name1,name2] = array1;
// console.log(name1,name2);

// // objects

// const person = {
//     name: 'kamikazi',
//     age: 25,
//     job: 'developer',
// }

// const {age,job} = person;
// console.log(age,job);

// const{name} = person;
// console.log(name);

//     //  for of

//     const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//     for(number of numbers ){
//          if(number%2 === 0) {
//             continue;
//          }
//          else{
//             console.log(number);
//          }
//     } 


//     let x = 'Tic';
// x = 'Tac';
// x = 'Toe';

// console.log(x);


// var kami = 8;
// var kami = 7;
// console.log(kami);

// const books = ['Books','Books','Books','Books','Books','Books','Books','Books','Books'];
// console.log(...books);

// let rivers = ['kami','books','pens',];
// let materiols = ['table','machine'];

// let comb = rivers.push(...materiols);
// console.log(rivers);

let fruits = ["apples", "bananas", "pears",1,3,4,5,6];
// let vegetables = ["corn", "potatoes", "carrots"];

// const produce = [...fruits,...vegetables]

// console.log(produce);

// let copies = [...fruits];
// console.log(...copies);

const [apples,bananas,pears,...items] = fruits;
console.log(apples,bananas,pears,items);


//   argument fuction

function sum(...nums){
    let total = 0;
    for(let num of nums){

        total += num;
     
    }
    console.log(total);
    //  console.log(arguments[0]);
  
    // for(let arg of arguments);{
      
    // console.log(total);}
}
sum(1,2,3,4,5,6,7,8,9);



function greet( name = "kami",greating= "hello"){
    return `${name} ${greating}`;
}
console.log( greet("keza","how is you"));

//  object defoult parameter
// function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }
//   console.log(houseDescriptor({shutterColors: ['white','gray','yellow']}));

//   array defoult parameter

// function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }
//   console.log(houseDescriptor(['blue','yellow']));


// function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { 
//     return `${scoops} scoops of ${toppings.join(' and ')}`;
 
//  }
//  console.log(createSundae([1, ['Hot Fudge', 'Sprinkles', 'Caramel']]))


// function buildHouse({floor=1,color="red",walls="brick"}={}){
//     return `your house have ${floor}floor(s) with ${color} ${walls}walls.`;
// }
  
//   console.log(buildHouse({floor:3} ));

  function IceCream() {
    this.scoops = 0;
};

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
