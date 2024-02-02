/*
  - Complete the solution so that it reverses the string passed into it.

  1) 'world'  =>  'dlrow'
  2) 'word'   =>  'drow'
*/

function solution(str) {
  let newStr = str.split("").reverse().join("");
  return newStr;
}
