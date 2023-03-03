const boxes = [];
let mark = "X";
let gameState = 0;
let amountOfMoves = 0;

boxes.push((boxOne = document.querySelector(".one")));
boxes.push((boxTwo = document.querySelector(".two")));
boxes.push((boxThree = document.querySelector(".three")));
boxes.push((boxFour = document.querySelector(".four")));
boxes.push((boxFive = document.querySelector(".five")));
boxes.push((boxSix = document.querySelector(".six")));
boxes.push((boxSeven = document.querySelector(".seven")));
boxes.push((boxEight = document.querySelector(".eight")));
boxes.push((boxNine = document.querySelector(".nine")));

function assignPlayer(mark) {
    if (mark === "X") return "Player 1";
    else return "Player 2";
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
    if (amountOfMoves === 9) {
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
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[1].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[7].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[2].textContent === mark &&
        boxes[5].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function checkRows(mark) {
    if (
        boxes[0].textContent === mark &&
        boxes[1].textContent === mark &&
        boxes[2].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[3].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[5].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[6].textContent === mark &&
        boxes[7].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function checkDiagonals() {
    if (
        boxes[0].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[8].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    } else if (
        boxes[2].textContent === mark &&
        boxes[4].textContent === mark &&
        boxes[6].textContent === mark
    ) {
        alert(`${assignPlayer(mark)} wins!`);
        gameState = 1;
    }
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }
    gameState = 0;
    amountOfMoves = 0;
    mark = "X";
}
