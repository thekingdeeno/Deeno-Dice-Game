var diceOne = document.getElementById("diceOne").innerHTML;
var diceTwo = document.getElementById("diceTwo").innerHTML;

var dice1 = ('<img src="images/dice1.png" alt="">');
var dice2 = ('<img src="images/dice2.png" alt="">');
var dice3 = ('<img src="images/dice3.png" alt="">');
var dice4 = ('<img src="images/dice4.png" alt="">');
var dice5 = ('<img src="images/dice5.png" alt="">');
var dice6 = ('<img src="images/dice6.png" alt="">');


function rollDice() {

    var randomNo = [(Math.random() * 6) + 1, (Math.random() * 6) + 1];
    var diceNo1 = Math.floor(randomNo[0]);
    var diceNo2 = Math.floor(randomNo[1]);
        
    var diceRoll = [diceNo1, diceNo2]


if (diceRoll[0] === 1) {
    document.getElementById("diceOne").innerHTML = dice1
};

if (diceRoll[0] === 2) {
    document.getElementById("diceOne").innerHTML = dice2
};

if (diceRoll[0] === 3) {
    document.getElementById("diceOne").innerHTML = dice3
};

if (diceRoll[0] === 4) {
    document.getElementById("diceOne").innerHTML = dice4
};

if (diceRoll[0] === 5) {
    document.getElementById("diceOne").innerHTML = dice5
};

if (diceRoll[0] === 6) {
    document.getElementById("diceOne").innerHTML = dice6
};




if (diceRoll[1] === 1) {
    document.getElementById("diceTwo").innerHTML = dice1
};

if (diceRoll[1] === 2) {
    document.getElementById("diceTwo").innerHTML = dice2
};

if (diceRoll[1] === 3) {
    document.getElementById("diceTwo").innerHTML = dice3
};

if (diceRoll[1] === 4) {
    document.getElementById("diceTwo").innerHTML = dice4
};

if (diceRoll[1] === 5) {
    document.getElementById("diceTwo").innerHTML = dice5
};

if (diceRoll[1] === 6) {
    document.getElementById("diceTwo").innerHTML = dice6
};


if (diceRoll[0] > diceRoll[1]) {
    document.getElementById("instruction").innerHTML = ('Player One Wins 🥇🏆')
}

if (diceRoll[1] > diceRoll[0]) {
    document.getElementById("instruction").innerHTML = ('Player Two Wins🥈🏆')
}

if (diceRoll[0] === diceRoll[1]) {
    document.getElementById("instruction").innerHTML = ("It's a Draw 🤷‍♂️")
}

    document.getElementById("instruction").style.fontSize = "40px";
}