let name="Saket"
document.write(name.length+"<br>")
document.write(name[0]+"<br>")
document.write(name[1]+"<br>")
document.write(name[2]+"<br>")
document.write(name[3]+"<br>")
document.write(name[4]+"<br>")


///template literals

let boy1="Saket"
let boy2="Sumit"

let sentence=`${boy2} is a friend of ${boy2}.`

document.write(sentence)

//Escape sequence characters

let vehicle= 'maruti\'s'

document.write("<br>"+vehicle)

///String Methods

let w="saket"

document.write(w.toUpperCase()+"<br>")
document.write(w.toLowerCase()+"<br>")
document.write(w.slice(1,4)+"<br>")
document.write(w.slice(2)+"<br>")

let p="saket saha"

document.write(p.replace("saha","sahu")+"<br>")

let name1="saket"
let name2="sahu"
let name3=name1.concat(" surname is ",name2)

document.write(name3)

let name4= "<br>..     saket      sahu     .."

document.write(name4.trim())




