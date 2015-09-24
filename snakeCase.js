function snakeCase(str){
  var words = [];
  words.push(str.match(/([A-Z][a-z]+)|([A-Z])/g));
  var snakedWords = words[0].join("_");
  return snakedWords.toLowerCase();
}

console.log(snakeCase('ThisIsAString'));
