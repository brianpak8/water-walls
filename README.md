# water-walls

Given a series of wall heights, what is the greatest amount of water that is contained between 
two walls?  The answer will be returned as an array listing the left wall, right wall, and how much water is held between them.

input:  an array of integers representing heights for the respective walls 
output: an array with number of the two walls between which there is the most water, as well as the amount of water between them.

edge case: if there is a height of zero, does the water "drain?" or does it still count?  For our purposes, we will assume it counts.

ex.  
const heights = [5, 2, 3, 7, 1, 1, 7];

expected output for waterWall(heights) : [4, 7, 12]