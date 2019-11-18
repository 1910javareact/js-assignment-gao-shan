/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objectLiteral = {
    name: 'Sam',
    age: 28
}

function Pastry(type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
  }

let danish = new Pastry('a', 'b', 'c', 'd', 'f'

class classObject {
    name
    age
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}