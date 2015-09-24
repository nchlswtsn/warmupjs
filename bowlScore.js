function bowlScore(scoreArray){
  var score = 0;
  for (var i = 0, j = 0; i < scoreArray.length && j < scoreArray.length; i++ && j++){
    if (scoreArray[j] < 10){
      score += scoreArray[j];
      console.log("LESS THAN" + score);
      i++
      score += scoreArray[i];
      console.log("LESS THAN" + score);

    }else{
      console.log("MORE THAN" + score);
      score += 10;
      console.log("MORE THAN" + score);
      i++
      score += scoreArray[i];
      console.log("MORE THAN" + score);
      i++
      score += scoreArray[i];
    }
  }
  return score;
}

console.log(bowlScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]));

// Test.expect( 0 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) )
// Test.expect( 190 == bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]) )
// Test.expect( 300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) )
// Test.expect( 11 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]) )
// Test.expect( 12 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) )
