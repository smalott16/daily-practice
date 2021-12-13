function arrayDiff(a, b) {
let flag = true
while (flag) {
  
  if (b.length === 0) {
    break;
  }
  for (let i of b) {
    if (a.indexOf(i) !== -1) {
      a.splice(a.indexOf(i), 1)
    } else {
      flag = false
    }
  }
}
return a;
}

console.log(arrayDiff([1,8,2], []));