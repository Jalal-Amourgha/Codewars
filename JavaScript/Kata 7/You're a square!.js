/*
  - You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

  - However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

  - -1  =>  false
  - 0  =>  true
  - 3  =>  false
  - 4  =>  true
  - 25  =>  true
  - 26  =>  false
*/

var isSquare = function (n) {
  return n < 0 ? false : Number.isInteger(Math.sqrt(n)) ? true : false;
};
