function withdraw(n) {
  let remainder = n
  let result = []
  array = [100, 50, 20];
  array.forEach((bill) => {
    nBills = (remainder - (remainder % bill)) / bill;
    result.push(nBills);
    remainder -= nBills * bill;
  });
  return result;
}

console.log(withdraw(40));
console.log(withdraw(250));
console.log(withdraw(260));
console.log(withdraw(230));
console.log(withdraw(60));


/* 
40 
40 % 100 = 40 => 0
40 % 50 = 40 => 0
40 % 20 = 0 => 2
[0, 0, 2]

250 
250 % 100 = 50 => 2
50 % 50 = 0 => 1
[2, 1, 0]

230
230 % 100 = 30 => 2
30 % 50 = 30 => 0
30 % 20 = 10 => 1
[2, 0, 1]

[1, 0, 1]
130 % 50 = 30 => 2
30 % 20 = 10 => 1
[1, 2, 1]

[1, 1, 1]
80 % 20 0 => 4
[1, 1, 4]

260
260 % 100 = 60 => 2
60 % 50 = 10 => 1
10 % 20 = 20 => 0

*/

