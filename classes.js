class Product{
    constructor(name,price){
        this.name = name;
        this.price=price;
    }

    getDetails(){
        return `the name${this.name} snd the price is ${this.price}`;
    }
    applyDiscount(discount){
        this.discount = discount;
       return  this.discount = (10*this.price) / 100;
    }
}

let newthings  = new Product("john",30000);
console.log(newthings.getDetails());
console.log(newthings.applyDiscount());


class DigitalProduct extends Product{
constructor(name,price,downloadLinks){
    super(name,price);
    this.downloadLinks = downloadLinks ;
}
  getDetails(){
    return `the name${this.name} snd the price is ${this.price} and the link is ${this.downloadLinks}`;
  }
}
let newA = new DigitalProduct("john",30000,"huvfoe;wro");
console.log(newA.getDetails());