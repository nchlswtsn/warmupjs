function simpleSymbols(str){
  var checker;
  var trueMatch = str.match(/\+\w\+/g)
  var letterMatch = str.match(/([a-z])/gi)
  for(var i = 0; i < letterMatch.length; i++){
    var a = letterMatch[i];
    var b = trueMatch[i];
    if (a == b){
      checker = true;
    }
  }

  return checker;
}

console.log(simpleSymbols("+d+=3=+s+"));
