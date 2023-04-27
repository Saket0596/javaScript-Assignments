let a = [[4,7], [9, 4]]
let b = [[1,5], [6,8]]

let c = [[], []];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
    c[i][j] = a[i][j] + b[i][j];
     }
    }

console.log("Array is :"+c)
