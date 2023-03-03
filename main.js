const boxes = [];
let mark = "X";
let gameState = 0;
let amountOfMoves = 0;
let playerOne = "Player 1";
let playerTwo = "Player 2";

const winMessage = document.querySelector(".winmessage");

boxes.push((boxOne = document.querySelector(".one")));
boxes.push((boxTwo = document.querySelector(".two")));
boxes.push((boxThree = document.querySelector(".three")));
boxes.push((boxFour = document.querySelector(".four")));
boxes.push((boxFive = document.querySelector(".five")));
boxes.push((boxSix = document.querySelector(".six")));
boxes.push((boxSeven = document.querySelector(".seven")));
boxes.push((boxEight = document.querySelector(".eight")));
boxes.push((boxNine = document.querySelector(".nine")));

function setNames() {
    if (document.querySelector(".playerone").value)
        playerOne = document.querySelector(".playerone").value;
    if (document.querySelector(".playertwo").value)
        playerTwo = document.querySelector(".playertwo").value;
    reset();
}

function returnPlayer(mark) {
    if (mark === "X") return playerOne;
    else return playerTwo;
}

function move(index) {
    if (gameState === 0) {
        if (!boxes[index].textContent) {
            boxes[index].textContent = mark;
            amountOfMoves++;
            checkGame(mark);
            if (mark === "X") mark = "O";
            else if (mark === "O") mark = "X";
        }
    }
}

function checkGame(mark) {
    checkColumns(mark);
    checkRows(mark);
    checkDiagonals(mark);
    if (amountOfMoves === 9 && gameState === 0) {
        winMessage.textContent = `It's a draw!`;
        gameState = 1;
    }
}

function checkColumns(mark) {
    if (
        boxes[0].textContent === mark &&
        boxes[3].textContent === mark &&
        boxes[6].textContent === mark
    )
        gameWin(mark, 0, 3, 6);
    else if (
        boxes[1].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[7].textContent === mark
    )
        gameWin(mark, 1, 4, 7);
    else if (
        boxes[2].textContent === mark &&
        boxes[5].textContent === mark &&
        boxes[8].textContent === mark
    )
        gameWin(mark, 2, 5, 8);
}

function checkRows(mark) {
    if (
        boxes[0].textContent === mark &&
        boxes[1].textContent === mark &&
        boxes[2].textContent === mark
    )
        gameWin(mark, 0, 1, 2);
    else if (
        boxes[3].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[5].textContent === mark
    )
        gameWin(mark, 3, 4, 5);
    else if (
        boxes[6].textContent === mark &&
        boxes[7].textContent === mark &&
        boxes[8].textContent === mark
    )
        gameWin(mark, 6, 7, 8);
}

function checkDiagonals() {
    if (
        boxes[0].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[8].textContent === mark
    )
        gameWin(mark, 0, 4, 8);
    else if (
        boxes[2].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[6].textContent === mark
    )
        gameWin(mark, 2, 4, 6);
}

function gameWin(mark, box1, box2, box3) {
    winMessage.textContent = `${returnPlayer(mark)} wins!`;
    boxes[box1].style.backgroundColor = "rgb(97, 233, 97)";
    boxes[box2].style.backgroundColor = "rgb(97, 233, 97)";
    boxes[box3].style.backgroundColor = "rgb(97, 233, 97)";
    gameState = 1;
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        boxes[i].style.backgroundColor = "white";
    }
    winMessage.textContent = "";
    gameState = 0;
    amountOfMoves = 0;
    mark = "X";
}
