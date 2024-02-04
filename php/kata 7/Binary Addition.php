<?php

/*
  - Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
  - The binary number returned should be a string.

  Examples:(Input1, Input2 --> Output (explanation)))
  1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
  5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function add_binary($a, $b) {
  $sum = $a + $b;
  $result = "";
  if ($sum < 2) {
    return round($sum / 2);
  }
  do {
    $result = $result . (string) ($sum % 2);
    $sum = floor($sum / 2);
    $condition = floor($sum / 2);
  } while($condition > 0.99);

  return "1" . strrev($result);
}