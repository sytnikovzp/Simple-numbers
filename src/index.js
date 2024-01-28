'use strict';

let num = 100; // set interval

nextIteration: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextIteration;
  }
  console.log(`${i} is a simple number`);
}
