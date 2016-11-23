/* 
  Angela Geronimo
  November 23, 2016
  Title:Javascript Test Review
*/

// Creat Variables
var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Dragon";

// Create an Array
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

// Create an Object
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[1],
  power : 47
};

// Hail the King
function swordInTheStone(worthy){
  if (worthy== "Arthur"){
    console.log("We have found our King " + worthy + "!")
  } else {
    console.log("We must keep searching, for " + worthy + " is unworthy.")
  }
}

// Invoke function w/ knight var
swordInTheStone(knight);


// Hail the King and Queen
function trueLove(king, queen){
  if (queen == "Guinevere" && king == "Arthur"){
    console.log("On this day, king " + king + " and queen " + queen + " shall rule happily ever after.")
  } else {
    console.log("We must keep searching, for true love must reign over Camelot.")
  }
}

// invoke function w/ knight and maiden var
trueLove(knight, maiden);


// Merlin and Monster
function epicBattle(wizard, enemy, power){
  if (power <= 15){
    console.log("Our" + wizard + " has fallen. We are doomed!")
  } else if (power >= 16 && power <= 40){
    console.log(wizard + " has almost slain the " +  enemy + ".")
  } else {
    console.log(wizard + " has slain the " +  enemy + "! Hoorah!")
  }
}

// invoke function w/ object's first key val, monster var, object's third key val
epicBattle(hero.wizard, monster, hero.power);