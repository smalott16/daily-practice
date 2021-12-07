function duplicateEncode(word){
  // ...
  const wordLowerCase = word.toLowerCase();
  const wordArray = [...wordLowerCase];
  let tempArray = [];
  let newString = "";
  for (let i = 0; i < wordLowerCase.length; i++) {
    tempArray = [...wordArray];
    tempArray.splice(i, 1);

    if (!tempArray.includes(wordLowerCase[i])) {
      newString = newString.concat("(");
    }
    else {
      newString = newString.concat(")");
    }
  }
  return newString;
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))