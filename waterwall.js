//  input: an array of heights
//  output: an array with the number of walls between which the most water is trapped
//  and how much water is trapped
//  constraints: none
//  edge case:  a height of zero.  Will assume water cannot 'drain'
/*  
  strategy:  start from left
  check for a wall that is equal or higher, or if at end of array
    calculate water between walls
      if at end, use smaller height to calculate
  store resultes in an object and filter to find biggest
    if there are ties, return first 
*/
const waterWall = function(heights) {



}


const testSum = (a, b) => a + b;

module.exports.testSum = testSum;