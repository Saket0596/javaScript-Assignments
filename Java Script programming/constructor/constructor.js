class Tickets{

    constructor(givenname,seatno){
        console.log("CONSTRUCTOR CALLED....."+givenname+ " "+seatno)
            this.name=givenname
            this.no=seatno
    }
    
    booked(){
        alert(this.name+" booked the ticket "+this.no)
    }
    cancel(){
        alert(this.name+" this ticket is cancelled "+this.no)
    }
    
    
}


let harry= new Tickets("Harry","102")
// harry.fill("Harry","102")
let saket= new Tickets("Saket","105")
// saket.fill("Saket","105")
let shalu= new Tickets("Shalu","96")
// shalu.fill("Shalu","96")


harry.booked()
saket.booked()
shalu.booked()


saket.cancel()
shalu.cancel()