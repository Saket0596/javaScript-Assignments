let compare=(a,b)=>{
    return a-b
}

let num=[112, 24, 31, 44, 101, 203, 33, 56]
console.log("array is :["+num+"]")
num.sort(compare)
console.log("maximum number in array : "+num[7])
console.log("miniimum number in array : "+num[0])
