function tribonacci(signature,n){
  //your code here
  
  //edge case where signature length is less than 3
  if (n < 3) {
    return signature.slice(0, n);
  }

  while (signature.length < n) {
    //push a sliced array that has been summed to a single value with reduce
    signature.push(signature.slice(-3).reduce((prev, cur) => prev + cur));
  }
  return signature;
}
