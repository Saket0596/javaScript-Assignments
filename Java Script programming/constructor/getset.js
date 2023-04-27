class Animal{
    constructor(name){
        this._name= name
    }
    run(){
        alert("animal is running")
    }
    get name(){
        return this._name
    }
    set name(newname){
        this._name=newname
    }
}

let a= new Animal("jack")
a.run()
console.log(a.name)
a.name="browney"

console.log(a.name)
let c =88 ////////any any element example


console.log(c instanceof Animal)
console.log(a instanceof Animal)