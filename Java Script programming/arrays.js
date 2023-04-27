let marks=[60,40,50,60,80,70,65]

document.write(marks+"<br>")
document.write(marks[0]+"<br>")
document.write(marks[2]+"<br>")
document.write(marks[5]+"<br>")
document.write(marks[4]+"<br>")
document.write(marks[1]+"<br>")
document.write(marks.length+"<br>")
document.write(typeof marks+"<br>")

/////arrays method
let n=marks.toString()
document.write(n+"<br>")
document.write(typeof n+"<br>")


document.write(marks.join("_")+"<br>")


document.write(marks.pop()+"<br>")//popping the element from box


marks.push(85)
document.write(marks+"<br>")

let r=marks.shift()

document.write(r+"<br>")
document.write(marks+"<br>")

let s=marks.unshift(44)

document.write(s+"<br>")
document.write(marks+"<br>")


let num=[1,2,4,8,5,6,7]
delete num[0]
document.write(num+"<br>")


////splice and slice///
let num6=[1,2,4,8,5,6,7]
document.write(num6+"<br>")
num6.splice(2,3,101,102,103)

document.write(num6+"<br>")


let num5=[1,2,3,4,5,8]

document.write(num5+"<br>")
document.write(num5.slice(2)+"<br>")
document.write(num5.slice(1,4,5)+"<br>")


let z=[1,2,3,4,5,8]
let i=0
z.forEach((i)=>{
    document.write(z[i]*2+"<br>")
})

let name="Saket"

let arr=Array.from(name)

document.write(arr)






