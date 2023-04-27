class Animal{
    constructor(name,color){
        this.name= name
        this.color= color
    }
    run(){
        console.log(this.name+ " is Running!")
    }
    shout(){
        console.log(this.name+ " is Shouting!")
    }
}


class Monkey extends Animal{
    eatBnanana(){
        console.log(this.name+ " is eating banana")
    }
} 

class Zebra extends Animal{
    drink(){
        console.log(this.name+ " is drinking water from pond")
    }
}

let ani= new Animal("puffy","white")
let monk=new Monkey("raja","grey")
let zeb= new Zebra("goofy","black-white")
ani.shout()
monk.eatBnanana()
zeb.run()
zeb.drink()