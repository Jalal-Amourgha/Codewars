<?php
/*
  -Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(int $n): string {
  return ($n % 2 == 0) ? "Odd" : "Even";
}