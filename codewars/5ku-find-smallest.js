function smallest(n) {
  
  let nArray = n.toString().split('').map((i) => Number(i))
  const sortedArray = [...nArray].sort((a, b) => (a - b));
  let smallestNumber;

  //walk through sorted array
  for (let i = 0; i < sortedArray.length; i++) {
    //keep track of the index of num within the original array
    let j = nArray.indexOf(sortedArray[i]);
    //if the number is zero, splice it out else do other stuff
    if (sortedArray[i] === 0) {
      console.log("here")
      nArray.splice(nArray.indexOf(0), 1);
      return [Number(nArray.join('')), j, i]
    } else if (j !== i) {
      nArray.splice(j, 1).splice(i, 0, sortedArray[i]);
      console.log(i)
      return [Number(nArray.join('')), j, i]
    }      
  }
};

console.log(smallest(261235));
console.log(smallest(209917));

