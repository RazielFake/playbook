export default class Pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
      console.log(`${this.name} says hello`)
    }
  }