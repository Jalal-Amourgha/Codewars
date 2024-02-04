<?php

/*
  - Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"
  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest($a, $b) {
  $new_str = array_merge(str_split($a), str_split($b));
  sort($new_str);
  return implode("", array_unique($new_str));

}

print_r(longest("aretheyhere", "yestheyarehere")); // "aehrsty"