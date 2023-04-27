class Tickets{
    booked(){
        alert(this.name+" booked the ticket")
    }
    cancel(){
        alert(this.name+" this ticket is cancelled")
    }
    fill(givenname){
        this.name=givenname
    }
}


let harry= new Tickets()
harry.fill("Harry")
let saket= new Tickets()
saket.fill("Saket")
let shalu= new Tickets()
shalu.fill("Shalu")


harry.booked()
saket.booked()
shalu.booked()


saket.cancel()
shalu.cancel()

