// Toglogchiin eeljiig hadgalah hubisagch, negdugeer toglogchiig 0, hoerdugaar togologhiig 1 gej temdeglee
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah hubisagch
var scores = [0, 0];
// Toglogchii eeljindee tsugluulaj bgaa onoog hadgalah hubisagch
var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah hubisagch heregtei, 1-6 gesen utgiig ene hubisagchid sanamsarguigeer uusgej ogno
var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

// Program ehlehed beltgee
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
