class Employee {
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
/////////method overiding  ////////////////////////
class programmer extends Employee{
    requestcoffee(x){
        console.log(`Employee has requested for ${x} coffees`)
    }
    requestleave(leaves) {
        console.log(`Employee has requested ${leaves+1} leaves(one extra //methodoverriding//)`)
    }  

}

let e = new Employee()

e.login()
e.requestleave("3")

let p = new programmer()

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

m.login()
m.requestleave()