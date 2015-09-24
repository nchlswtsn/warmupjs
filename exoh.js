function exOh(string){
  var letters = string.split('');
  var exs = [];
  var ohs = [];
  console.log(letters);
  for (var i = 0; i < letters.length; i++){
    if (letters[i] === "x"){
      exs.push(letters[i]);
    }else{
      ohs.push(letters[i]);
    }
  }
  console.log(exs);
  console.log(ohs);
  return exs.length % 2 === 0 && ohs.length % 2 === 0
}
console.log(exOh("xoxoxoxoxxxxxxxxx"));
