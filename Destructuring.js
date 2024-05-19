// Destructuring Challenge: You're building a user profile system. Create a function 
// extractProfile(user) that takes an object user with properties name, age, city, and 
// occupation (optional). Using destructuring, return a new object containing only the name and city properties.


function extractProfile (){
    let user = {
        name:"kamil",
        age: 19,
        city:"kigali",
        occupation:"gastata"
    }
    let{name,city} = user;
    console.log(name);
    console.log(city);
}