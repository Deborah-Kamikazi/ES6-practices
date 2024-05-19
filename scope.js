// const a = 1; const b = 2; const c = 3;

// (function firstFunction () {
//   const b = 5; const c = 6;

//   (function secondFunction () {
//     const b = 8;
//     console.log(`a:${a}, b:${b}, c:${c},`);

//     (function thirdFunction () {
//       const a = 7; const c = 9;

//       (function fourthFunction () {
//         const c = 8;
        
//       })();
//     })()
//   })()
// }) ()


    //calcurating average using spread operators
function average(...nums) {
  let sum = 0;
  
  for(let num of nums){
    
      sum += num;
     
  }
 //  console.log(sum);
  let averages =Math.floor(sum/nums.length);
  return averages;
  }
  
  console.log( average(7, 1432, 12, 13, 100))
     
  // arrow function 

  let name = (names) => names.toUpperCase();
  console.log(name('kamikazi'));
  console.log(typeof name);

  //sorting using arrow function

  let numbers = [1,3,6,78,90].sort((a,b)=> b-a);
  console.log(numbers);
  
  
 
