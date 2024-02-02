/*
  - Numbers ending with zeros are boring.

  - They might be fun in your world, but not here.

  - Get rid of them. Only the ending ones.
*/

function noBoringZeros(n) {
  let stringParam = String(n);
  while (stringParam.endsWith(0)) {
    stringParam = stringParam.slice(0, stringParam.length - 1);
  }
  return Number(stringParam);
}
