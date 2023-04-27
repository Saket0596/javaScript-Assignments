let a= {
    // name:"saket",
    surname:"sahu",
    language:"Javascript",
    run: () => {
        alert("run machine")
    }
}

console.log(a)


let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__={
    name:"Bossonline"
}

a.__proto__=p
a.run()

console.log(a.name)