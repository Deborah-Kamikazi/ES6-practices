function sum (...arg){
    filter(function (e){
        return typeof e === 'number';
    })
    reduce(function(a,b){
        return a+b;
    })
}
let result = sum(10,'Hi',null,undefined,20); 
console.log(result);