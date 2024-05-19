let scores = [1,3,4,"kami"];
for(let[index,score] of scores.entries()){
    console.log(index,score);
}

function getScores(){
    return [10,13,14,16]
}
let[p,y,...z] = getScores();
console.log(p,y,z);
let [a,b] = z;

 function suming(a,b){
    return[ a+b, (a+b)/2,b-a]
 }
 let[sum,division,sub] = suming(10,20);
 console.log(sum,division,sub);

//  classes

class person{
    constructor(names,age){
        this.names = names;
        this.age = age;
    }

    getinfo(){
        return `my name is ${this.names} and my age is ${this.age}`
    }
}
let idas = new person("keza",12);
let info = idas.getinfo();
console.log(info);