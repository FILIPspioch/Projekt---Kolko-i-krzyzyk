//elementy
const board = document.querySelector("#board");
const boxes = document.querySelectorAll(".grid_box");

const btn_player1 = document.querySelector("#btn_player1");
const btn_player2 = document.querySelector("#btn_player2");

const communication = document.querySelector("#communication");

//zmienne
let activePlayer = "";

//klasy
class boxObj {
  constructor(status, char) {
    this.occupied = status;
    this.char = char;
  }
}

//tablice
let boxesObjects = new Array(9);
//kod
btn_player1.addEventListener("click", () => (activePlayer = "player1"));
btn_player2.addEventListener("click", () => (activePlayer = "player2"));

for (let i = 0; i < boxes.length; i++) {
  // Tworzymy obiekt, bo nie był stworzony wcześniej
  boxesObjects[i] = new boxObj(false, undefined);

  boxes[i].addEventListener("click", (e) => {
    //tu kod co jak kliknieto
    if (activePlayer === "player1") {
      if (isOccupied(i) == true) {
      } else {
        funPlayX(i);
      }
    } else {
      if (isOccupied(i) == true) {
      } else {
        funPlayCircle(i);
      }
    }

    if (checkForWin("X") == "X wins") {
      console.log("X wygrywa");
      winMessage("X");
      setTimeout(clearBoard, 2000);
    }
    if (checkForWin("O") == "O wins") {
      console.log("O wygrywa");
      winMessage("O");
      setTimeout(clearBoard, 2000);
    }
  });
}

function funPlayX(boxIndex) {
  // To zmienione bo nie ma sensu deklarować od nowa
  boxesObjects[boxIndex].occupied = true;
  boxesObjects[boxIndex].char = "X";
  boxes[boxIndex].innerHTML = "<p>X<p>";
}

function funPlayCircle(boxIndex) {
  boxesObjects[boxIndex].occupied = true;
  boxesObjects[boxIndex].char = "O";
  boxes[boxIndex].innerHTML = "<p>O<p>";
}

function checkForWin(symbol) {
  //tutaj sprawdzac indexy
  if (
    // linia pozioma 1
    boxesObjects[0].occupied == true &&
    boxesObjects[0].char === symbol &&
    boxesObjects[1].occupied == true &&
    boxesObjects[1].char == symbol &&
    boxesObjects[2].occupied == true &&
    boxesObjects[2].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    //linia pozioma 2
    boxesObjects[3].occupied == true &&
    boxesObjects[3].char == symbol &&
    boxesObjects[4].occupied == true &&
    boxesObjects[4].char == symbol &&
    boxesObjects[5].occupied == true &&
    boxesObjects[5].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    boxesObjects[6].occupied == true &&
    boxesObjects[6].char == symbol &&
    boxesObjects[7].occupied == true &&
    boxesObjects[7].char == symbol &&
    boxesObjects[8].occupied == true &&
    boxesObjects[8].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    // linia skośna 1
    boxesObjects[0].occupied == true &&
    boxesObjects[0].char == symbol &&
    boxesObjects[4].occupied == true &&
    boxesObjects[4].char == symbol &&
    boxesObjects[8].occupied == true &&
    boxesObjects[8].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    //linia skośna 2
    boxesObjects[2].occupied == true &&
    boxesObjects[2].char == symbol &&
    boxesObjects[4].occupied == true &&
    boxesObjects[4].char == symbol &&
    boxesObjects[6].occupied == true &&
    boxesObjects[6].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    //linia pionowa 1
    boxesObjects[0].occupied == true &&
    boxesObjects[0].char == symbol &&
    boxesObjects[3].occupied == true &&
    boxesObjects[3].char == symbol &&
    boxesObjects[6].occupied == true &&
    boxesObjects[6].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    // linia pionowa 2
    boxesObjects[1].occupied == true &&
    boxesObjects[1].char == symbol &&
    boxesObjects[4].occupied == true &&
    boxesObjects[4].char == symbol &&
    boxesObjects[7].occupied == true &&
    boxesObjects[7].char == symbol
  ) {
    return `${symbol} wins`;
  } else if (
    //linia pion 3
    boxesObjects[2].occupied == true &&
    boxesObjects[2].char == symbol &&
    boxesObjects[5].occupied == true &&
    boxesObjects[5].char == symbol &&
    boxesObjects[8].occupied == true &&
    boxesObjects[8].char == symbol
  ) {
    return `${symbol} wins`;
  } else {
    return `no wins`;
  }
}

function isOccupied(boxIndex) {
  return boxesObjects[boxIndex].occupied;
}

function winMessage(symbol) {
  communication.style.opacity = "1";
  communication.innerHTML = `<h2>${symbol} WYGRYWA !!</h2>`;
}

function clearBoard() {
  for (let a of boxesObjects) {
    a.char = "";
    a.occupied == false;
  }
  for (let a of boxes) {
    a.innerHTML = "<p></p>";
  }
  communication.innerHTML = " ";
  communication.style.opacity = "0";
}
