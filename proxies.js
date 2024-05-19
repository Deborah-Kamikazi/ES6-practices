// let student = {name:"kami",school:"ESSM"}
// let info = new Proxy (student,{});
// console.log(info);

function* getEmployee() {
    console.log('the function has started');

    const namese = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const names of namese) {
       return  names ;
       yield names;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
generatorIterator.next();