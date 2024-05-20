// Write a function that takes an object as input and returns a new object
//  with all the key-value pairs reversed (keys become values and values become keys)
//   const originalObj =
//  {aa: "1", bf: "3", cq: "5"}; const reversedObj = reverseObject(originalObj); //
//   console.log(reversedObj);  output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output


function reversed (obj){
    let name  = {}
    let keyse = Object.keys(obj);
    console.log(keyse);
    let value = Object.values(obj);
    console.log(value);
    for (let i =0; i<value.length;i++)
{
name[value[i] ] = keyse[i];
}    
return name;
}
console.log(reversed ( {aa: "1", bf: "3", cq: "5"}))