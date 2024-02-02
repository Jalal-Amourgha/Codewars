/*
  - What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

  - Example(Input --> Output)
  -- "apple ban" --> ["apple 5", "ban 3"]
  -- "you will win" -->["you 3", "will 4", "win 3"]

  - Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/

function addLength(str) {
  let newStr = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    newStr[i] = `${str[i]} ${str[i].length}`;
  }
  return newStr;
}
