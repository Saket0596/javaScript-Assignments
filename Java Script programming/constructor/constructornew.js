// agar koi bhi ticket cancel karta hai then seat no be 0 or undefined//
class Tickets{

    constructor(givenname,seatno,address,time){
        console.log("CONSTRUCTOR CALLED....."+givenname+ " "+seatno)
            this.name=givenname
            this.no=seatno
            this.add=address
            this.mvtime=time
    }

    preview(){
        alert(this.name+" booked the ticket "+this.no+" address is "+this.add+" and this tym "+this.mvtime)
    }
    
    booked(){
        alert(this.name+" booked the ticket "+this.no)
    }
    cancel(){
        alert(this.name+" this ticket is cancelled "+this.no)
        this.no=0
    }   
}

let shaluticket=new Tickets("shalu","145","cseb","4pm")

shaluticket.preview()
shaluticket.booked()
shaluticket.cancel()

shaluticket.preview()
