/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    console.log(someObj)
}
class Pirate {
    eyepatch
    gun
    shipType
    illegitimateChildren
    constructor(eyepatch, gun, shipType, illegitimateChildren) {
        this.eyepatch = eyepatch
        this.gun = gun
        this.shipType = shipType
        this.illegitimateChildren = illegitimateChildren
    }
}

let trevor = new Pirate(true, 'Musket', 'Schooner', 6)

let norris = {
    name: 'norris',
    age: '23'
}

function Pastry(type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
  }

let danish = new Pastry('a', 'b', 'c', 'd', 'f')

objectProperties(trevor)
objectProperties(norris)
objectProperties(danish)