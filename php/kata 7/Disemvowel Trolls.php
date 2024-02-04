<?php

/*
  - Trolls are attacking your comment section!
  - A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  - Your task is to write a function that takes a string and return a new string with all vowels removed.
  - For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  - Note: for this kata y isn't considered a vowel.
*/

function disemvowel($string) {
  $new_str = "";
  for ($i = 0; $i < strlen($string); $i++) {
    if (strtolower($string[$i]) != "a" && strtolower($string[$i]) != "e" && strtolower($string[$i]) != "i" && strtolower($string[$i]) != "o" && strtolower($string[$i]) != "u" ) {
      $new_str = "$new_str$string[$i]";
    }
  }
  return $new_str;
}

echo disemvowel("This website is for losers LOL!")