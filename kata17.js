//decode text and convert to object 

const urlDecode = function(text) {
  // Put your solution here
  let formattedObject = {}
  const keyValuePairs = text.split('&');
  keyValuePairs.forEach((item) => {
    let pair = item.split('=');
    formattedObject[pair[0]] = pair[1].split('%20').join(" "); 
  })
  return formattedObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);