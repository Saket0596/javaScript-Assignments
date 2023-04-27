class Employee {

    constructor(name){
            console.log(` ${name} -- employee constructer is here`)
            this.name=name
    }
    login() {
        console.log(`Employee has logged in`)
    }
    logout() {
        console.log(`Employee has logged out`)
    }
    requestleave(leaves) {
        console.log(`Employee has requested ${leaves} leaves`)
    }    
}

class programmer extends Employee{
    constructor(name){
        super(name)
        console.log(` ${name} -- programmer constructer is newly constructed`)
        this.name=name
    }
    // constructor(){       ///this contructor automatically create by java script..bcozz...programmer is child of employee
    //     super()
    // }
    requestcoffee(x){
        console.log(`Employee has requested for ${x} coffees`)
    }
    requestleave(leaves) {
        console.log(`Employee has requested ${leaves+1} leaves(one extra //methodoverriding//)`)
    }  

}

// let e = new Employee()

// e.login()
// e.requestleave("3")

let p = new programmer("Saket")

p.login()
p.requestleave("3")

//////////////// Super keyword /////////////////////

class manager extends Employee{
    requestcoffee(x){
        console.log(`Employee has requested for ${x} coffees`)
    }
    requestleave(leaves) {
        super.requestleave(4)
        console.log("one extra is granted")
        //console.log(`Employee has requested ${leaves+1} leaves(one extra //methodoverriding//)`)
    }  
}


let m = new manager()

// m.login()
// m.requestleave()