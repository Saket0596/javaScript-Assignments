function Avg(x,y){
    document.write("Done<br>")
    return ((x+y)/2)
    
}

let a=parseInt(prompt("Enter number"))
let b=parseInt(prompt("Enter number"))
let c=parseInt(prompt("Enter number"))


document.write("Avg of "+a+" and "+b+" is :",Avg(a,b)+"<br>")
document.write("Avg of "+b+" and "+c+" is :",Avg(b,c)+"<br>")
document.write("Avg of "+c+" and "+a+" is :",Avg(c,a)+"<br>")


//arrow function//

const sum=(p,q)=>{
    return p+q
}


document.write(sum(9,7))

const hello=()=>{
    document.write("hello world")
}

hello();