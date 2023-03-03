const boxes = [];
let mark = "X";
let gameState = 0;
let amountOfMoves = 0;
let playerOne = "Player 1";
let playerTwo = "Player 2";

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
    playerOne = document.querySelector(".playerone").value;
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
        alert("It's a draw!");
        gameState = 1;
    }
}

function checkColumns(mark) {
    if (
        boxes[0].textContent === mark &&
        boxes[3].textContent === mark &&
        boxes[6].textContent === mark
    ) {
        highlight(0, 3, 6);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[1].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[7].textContent === mark
    ) {
        highlight(1, 4, 7);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[2].textContent === mark &&
        boxes[5].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        highlight(2, 5, 8);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function checkRows(mark) {
    if (
        boxes[0].textContent === mark &&
        boxes[1].textContent === mark &&
        boxes[2].textContent === mark
    ) {
        highlight(0, 1, 2);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[3].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[5].textContent === mark
    ) {
        highlight(3, 4, 5);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[6].textContent === mark &&
        boxes[7].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        highlight(6, 7, 8);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function checkDiagonals() {
    if (
        boxes[0].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        highlight(0, 4, 8);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[2].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[6].textContent === mark
    ) {
        highlight(2, 4, 6);
        alert(`${returnPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function highlight(box1, box2, box3) {
    boxes[box1].style.backgroundColor = "green";
    boxes[box2].style.backgroundColor = "green";
    boxes[box3].style.backgroundColor = "green";
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        boxes[i].style.backgroundColor = "white";
    }
    gameState = 0;
    amountOfMoves = 0;
    mark = "X";
}
