/*
  - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x) {
  return x.replace(/[0-4]/gi, 0).replace(/[5-9]/gi, 1);
}
