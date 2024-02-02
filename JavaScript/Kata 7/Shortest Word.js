/*
  - Simple, given a string of words, return the length of the shortest word(s).

  - String will never be empty and you do not need to account for different data types.
*/

/* My Solution */

function findShort(s) {
  let counter = [];
  s.split(" ").map((e, i) => (counter[i] = e.length));
  return Math.min(...counter);
}
