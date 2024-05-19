function* names(){
    console.log("invoke 1st name");
    yield 1;
    console.log("invoke 2nd name");
    
    yield 2;
}
let gen = names();
let results = gen.next();
console.log(results);