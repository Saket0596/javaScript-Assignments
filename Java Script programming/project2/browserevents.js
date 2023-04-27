// let a= document.getElementsByClassName("container")[0]
// a.onclick=()=>{
//     let b= document.getElementsByClassName("container")[0]
//     b.innerHTML="Hello World"
// }


//////////////////handling browsing events///////////////////////
//////////addEventlistener and removeEventlistner///////////////



let x=function(e){

    alert("hello 1")
}


btn.addEventListener('click', x)

let y=function(e){
    alert("hello 2")

}

btn.addEventListener('click',y)
let z=function(e){
    alert("hello 3")

}

btn.addEventListener('click',z)
let a=prompt('enter a number 1 to add 2 to remove Evenlistener')
{
    if (a=="2"){
        btn.removeEventListener('click',y)
}
}