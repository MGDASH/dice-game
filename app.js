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

// Shoog shideg event listner
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotorhi sanamsargui neg too gargaj abna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";
  // buusan sanamsargui toond hargalzah shooni zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too ni 1 ees yalgaatai bol idebhtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    // 1-ees yalgaatai too buulaa
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiin ene hesegt solij ogno
    // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Toglogchiin eeljiig nogoo toglogch ruu shiljulne
    // Hereb idebhtei toglogch ni 0 bbal idebhtei toglogchiig 1 bolgo
    // Ugui bol idebhtei toglogchiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //Ulaan tsegiig shiljuuleh code hiine
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tur alga bolgono
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    // #43 hicheel ene hvrtel yabsan
  }
});
