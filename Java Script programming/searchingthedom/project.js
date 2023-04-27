/////change the card title colour 

let ctitle=document.getElementById("Firstcardtitle")

ctitle.style.color="blue"

let ctitles=document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="green"
ctitles[2].style.color="yellow"
console.log(ctitles)


console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))


console.log(document.getElementsByName("Saket"))

let id1=document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

console.log(sp1.closest(".box"))

console.log(id1.contains(sp1))