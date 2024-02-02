/*
  - Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  * "String"      -> "SSttrriinngg"
  * "Hello World" -> "HHeelllloo  WWoorrlldd"
  * "1234!_ "     -> "11223344!!__ "
*/

let s = "";
function said(x) {
  for (let i = 0; i < a.length; i++) {
    s = s + x[i] + x[i];
  }
}

// other method

function double(x) {
  return x
    .split("")
    .map((e) => e.repeat(2))
    .join("");
}
