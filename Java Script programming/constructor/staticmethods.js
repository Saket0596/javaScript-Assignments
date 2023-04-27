
class Animal{
    constructor(name){
        this.name= name
    }
    run(){
        console.log("Animal " + Animal.capitalize(this.name)+ " is Running!")
        // console.log("Animal " + this.name+ " is Running!")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+ name.substr(1,name.length)
    }
    
}

j=new Animal("jack")
// j=new Animal(Animal.capitalize("jack"))///can use this also with line no 8

j.run()