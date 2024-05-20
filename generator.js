function* names(){
    console.log("invoke 1st name");
    yield 1;
    console.log("invoke 2nd name");
    
    yield 2;
}
let gen = names();
let results = gen.next();
console.log(results);


function * answer (){
    yield 'hello';
    yield 'word';
}

let namese = answer();
let an =  namese.next().value;
console.log(an);