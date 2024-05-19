let newAmap = new Map();
newAmap.set('kami@1',{
    name: 'kami',
    age: 20,
    gender:'male'
})
newAmap.set('rugamba@2',{
    name: 'keza',
    age: 20,
    gender:'male'
})

// console.log(newAmap);
// for(newA of newAmap){
//     console.log(newA);
// }

    newAmap.forEach((value,key) => console.log(key,value));
   