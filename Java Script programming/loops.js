//for loop//

for (let i=0 ; i<20 ; i++)
{
    document.write(i+" ")
}
document.write("<br> ")
//for in loop//

let obj={
    saket:5,
    sahu:10,
    age:20,
    mono:123
}

for (let a in obj)//a means key in object
{
    document.write(a+"   value "+obj[a]+"<br>" )
    console.log(a+"   value "+obj[a])
}
document.write("<br> ")


//for of loop//
let x= "BossOnline"
for (let b of x)
{
    document.write(b+" ")
    
}