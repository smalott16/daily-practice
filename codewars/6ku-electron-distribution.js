function atomicNumber(num){
  //"What are we doing today, Brain?" "The same thing we did last week, Pinky... Take over the CodeWars"
  let step = 1;
  remainder = num;
  electronShells = [];

  while (remainder > 0) {
    maxElectrons = Math.pow(step, 2) * 2;
    
    if (remainder > maxElectrons) {
      electronShells.push(maxElectrons);
      remainder -= maxElectrons;
    } else {
      electronShells.push(remainder)
      remainder = 0;
    }
    step++;
  }
  return electronShells;
};
