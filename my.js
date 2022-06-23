var scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;
var diceOne = document.getElementById("dice-1");
var diceTwo = document.getElementById("dice-2");
init();

// document.querySelector("#current--" + activePlayer).textContent = dice;
// document.querySelector("#current--" + activePlayer).innerHTML = "<em>" + dice + "<em>";
// var x = document.querySelector("#score--0").textContent;

document.querySelector(".btn--roll").addEventListener("click", function() {

    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        diceOne.style.display = "block";
        diceTwo.style.display = "block";
        diceOne.src = "dice-" + dice1 + ".png";
        diceTwo.src = "dice-" + dice2 + ".png";


        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});
document.querySelector(".btn--hold").addEventListener("click", function() {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".final--score").value;

        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name--" + activePlayer).innerText = "Winner!";
            document.querySelector(".player--" + activePlayer).classList.add("player--winner");
            document.querySelector(".player--" + activePlayer).classList.remove("player--active");
            diceDisplayNon();
            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    // document.querySelector(".player--0").classList.remove("player--active");
    // document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");

    diceDisplayNon();
}
document.querySelector(".btn--new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    // input = 0;
    gamePlaying = true;

    diceDisplayNon();

    document.getElementById("score--0").textContent = "0";
    document.getElementById("score--1").textContent = "0";
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";
    document.getElementById("name--0").textContent = "PLAYER 1";
    document.getElementById("name--1").textContent = "PLAYER 2";
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
};

function diceDisplayNon() {
    diceOne.style.display = "none";
    diceTwo.style.display = "none";
}