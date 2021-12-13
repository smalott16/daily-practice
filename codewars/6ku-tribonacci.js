function tribonacci(signature,n){
  //your code here
  let count = 1;
  let sequence = [...signature];

  //edge case where sequence length is less than 3
  if (n < 3) {
    return sequence.slice(0, n);
  }

  while (count <= n - 3) {
    //push a sliced array that has been summed to a single value with reduce
    sequence.push(sequence.slice(-3).reduce((prev, cur) => prev + cur));
    count++;
  }
  return sequence;
}
