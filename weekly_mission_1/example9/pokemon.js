class Pokemon {

    constructor(name) {
        this.name = name 
      }

      sayHello(){
          console.log(`${this.name} says hello`)
      }

      sayMessage(message){
        console.log(`Message sent: ${message}`)
    }
}

module.exports = Pokemon