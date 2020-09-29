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

// Shoog shideg event listner HICHEEL #43
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
    // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono (#44 hicheel deer code hichsen)
    switchToNextPlayer();

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
    // #43 hicheel ene hvrtel yabsan
  }
});

// HOlD tobchnii event listner #44 hicheel
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ug toglochiin tsugluulsan eeljnii onoog global onoon deer ni nemj ogno
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // } urtaar ingej bichne, gehdee DRY zarchim aar doorhi shig bichne. massive aar handaj bga.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Delgets deer onoog ni oorchilno
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Ug toglogch hojison esehiig shalgah (onoo ni 100-c ih eseh) shalgah
  if (scores[activePlayer] >= 20) {
    // Yalagch gesen text nerniih ni orond garna
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    // uug ni html deer player-0-panel, esbel 1 gej bgaa teriig zadlaad doorhi oor dundan activePlayer gej bichne
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    // hojison bol noogoo ulaan booronhii alga bolhog
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Toglogchiin eeljiig solino,
    switchToNextPlayer();
  }
});

// Ene function ni togloh eeljiig daraachiin toglogch ruu shiljuulne
function switchToNextPlayer() {
  //  ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono, deer bichsen code oo copydson
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Toglogchiin eeljiig nogoo toglogch ruu shiljulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //Ulaan tsegiig shiljuuleh code hiine
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tur alga bolgono
  diceDom.style.display = "none";
}
