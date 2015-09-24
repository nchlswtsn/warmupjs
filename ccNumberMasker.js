//write a function that operates as a credit card number masker
//preserving the last four digits/items of whatever string is
//passed in.

function masker(input){
  var masterSplit = input.split('');
  if (masterSplit.length > 4){
    var lastFour = masterSplit.slice(masterSplit.length - 4, masterSplit.length);
    var hashHalf = masterSplit.slice(0, masterSplit.length - 4);
    var newArray = []
    var hashProtect;
    for(var i = 0; i < hashHalf.length; i++){
      newArray.push("#");
    }
    for(var i = 0; i < lastFour.length; i++){
      newArray.push(lastFour[i]);
    }
    hashProtect = newArray.join('');
    return hashProtect;
  }else{
    return input;
  }
}
console.log(masker('23049587134690778274'));
console.log(masker('sdf987sdf9879asdfasd'));
console.log(masker('1'));
console.log(masker('12'));
console.log(masker('123'));
console.log(masker('1234'));
console.log(masker('12345'));
console.log(masker('!@#$%^&*)(_+)'));
