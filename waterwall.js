//  input: an array of heights
//  output: an array with the number of walls between which the most water is trapped
//  and how much water is trapped
//  constraints: none
//  edge case:  a height of zero.  Will assume water cannot 'drain'
//              no water.  return an empty array
/*  
  strategy:  
  start from the left
    find 'right' wall to trap water againts
    calculate water and store
    continue

  once all water have been calculated, find the most

*/




const waterWall = (heights) => {
  const waters = [];
  loop1:
  // left wall
  for (let i = 0; i < heights.length; i++) {
    loop2:
    //  right wall
    for (let j = i + 2; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        let water = 0;
        // subtract walls in between
        for (let k = i; k < j; k++) {
          water += heights[i] - heights[k];
        }
        waters.push({
          //  add one to account for arrays being zero indexed
          left: i + 1,
          right: j + 1,
          water: water
        })
        continue loop1;
      }
    }
  }
  let biggest = {water: 0};
  for (let i = 0; i < waters.length; i++) {
    if (waters[i].water > biggest.water) {
      biggest = waters[i];
    }
  }
  let output = [];
  if (!biggest.left) {
    return [];
  }
  output.push(biggest.left);
  output.push(biggest.right);
  output.push(biggest.water);
  return output;
};
/*
this doesn't work if the left most wall is the tallest

*/

const testSum = (a, b) => a + b;

module.exports.testSum = testSum;
module.exports.waterWall = waterWall;