function calc(x){
  let total1 = ""
  for (let i = 0; i < x.length; i++) {
    total1 += ("" + x.charCodeAt(i));
  }
  let sevens = 0
  for (let digit of total1) {
    if (digit === '7') {
      sevens++;
    }
  }
  return sevens * 6;
}
