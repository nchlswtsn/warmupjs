function TimeConvert(num) {
  var hours = num / 60;
  var remainder = num % 60;
  return Math.floor(hours) + ":" + remainder;
}

console.log(TimeConvert(888));
