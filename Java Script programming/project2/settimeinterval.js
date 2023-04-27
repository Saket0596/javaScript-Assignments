// alert("Hello")

const sum=(a,b)=>{
    console.log("yes i am running")
    console.log(a+b)
    
}

setTimeout(sum,5000,1,2)
setInterval(function(){
    alert("setinterval")
},3000)
//////another alert  will pop up after 3 seconds   
// let a=setTimeout(function(){
//     alert("i am bosss")
// },3000)

// let b=prompt("do you want to run the settimeout?")

// if ("n"==b){
//     clearTimeout(a)
// }
