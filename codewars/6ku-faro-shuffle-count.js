function faroCount(deckSize){
  //track one value assume index starts at 0
  let position = 1
  let shuffles = 0
  let continueLoop = true;
  //loop while condition is true or false
  while (continueLoop) {
    shuffles += 1;
    //if position if less or equal to half of the deck size new position is the current position * 2
    if (position < deckSize / 2) {
      position = position * 2;
      continue;
    }
    //once position exceeds half position new position is the 2 * the number of positions over half
    if (position >= deckSize / 2) {
      position = 1 + 2 * (position - (deckSize / 2)); 
    }
    //if position is back to start, return the number of shuffles
    if (position === 1) {
      return shuffles;
    }
    
  }
}

//console.log(faroCount(52));