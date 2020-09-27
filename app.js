// Toglogchiin eeljiig hadgalah hubisagch, negdugeer toglogchiig 0, hoerdugaar togologhiig 1 gej temdeglee
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah hubisagch
var scores = [0, 0];
// Toglogchii eeljindee tsugluulaj bgaa onoog hadgalah hubisagch
var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah hubisagch heregtei, 1-6 gesen utgiig ene hubisagchid sanamsarguigeer uusgej ogno
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Program ehlehed beltgee
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
