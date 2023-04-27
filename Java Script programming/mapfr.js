let arr=[25,40,33,50]
document.write(arr+"<br>")


///Array Map Method
arr.map((value)=>{
    document.write(value+"<br>")
})


let a=arr.map((value)=>{
    document.write(value+1+"  ")
})


let b=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+1
})

console.log(b)


///////Array Filter Method ///////////
document.write("<br>  ")
let arr1=[25,40,33,50,1,6,4,8,10]

let a2=arr1.filter((a)=>{
    return a<12
})

document.write(a2 +"  ")

document.write("<br>  ")
//////////Array reduce method//////

let arr3=[25,40,33,50,1,6,4,8,10]

let sum=arr3.reduce((s,t)=>{
    return s+t
})
document.write(sum)
