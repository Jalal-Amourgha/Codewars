/*
  - Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

  "hello"     -->  "hll"
  "codewars"  -->  "cdwrs"
  "goodbye"   -->  "gdby"
  "HELLO"     -->  "HELLO"
*/

function shortcut(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "o" &&
      string[i] !== "i" &&
      string[i] !== "u"
    ) {
      newStr = newStr + string[i];
    }
  }
  return newStr;
}
