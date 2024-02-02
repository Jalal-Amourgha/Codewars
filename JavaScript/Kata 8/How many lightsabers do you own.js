/*
  - Inspired by the development team at Vooza, write the function that
    1- accepts the name of a programmer, and
    2- returns the number of lightsabers owned by that person.

  - The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

  - "anyone else" --> 0
  - "Zach" --> 18
*/

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
