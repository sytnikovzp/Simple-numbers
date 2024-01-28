'use strict';

let num = 10; // set interval

nextIteration:
for (let i = 1; i <= num; i++) { // For i to *num*
  for (let j = 2; j < i; j++) { // check remainder of division
    if (i % j === 0) console.log(i+' is not Prime');
  }

  // console.log(i); 
}
