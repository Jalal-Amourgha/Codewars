/*
  - When provided with a letter, return its position in the alphabet.

  - Input :: "a"
  => Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  const result = letter.charCodeAt(0);
  return `Position of alphabet: ${result - 96}`;
}
