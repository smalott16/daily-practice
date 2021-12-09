function faroCount(deckSize){

  //track one value assume index starts at 0
  let position = 1
  let shuffles = 0
  //loop while condition is true or false
  while (shuffles < 52) {
    shuffles += 1;
    //if position if less or equal to half of the deck size new position is the current position * 2
    if (position < deckSize / 2) {
      position = position * 2;
      console.log(shuffles, position)
      continue;
    }

    //once position exceeds half position new position is the 2 * the number of positions over half
    if (position >= deckSize / 2) {
      position = 1+ (position - (deckSize / 2));
      console.log(shuffles, position)
      continue;
    }

  }

  return position;
}

(faroCount(10));