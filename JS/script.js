//elementy
const board = document.querySelector("#board");
const boxes = document.querySelectorAll(".grid_box");

const btn_player1 = document.querySelector("#btn_player1");
const btn_player2 = document.querySelector("#btn_player2");

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
let boxesObjects = new Array(8);
//kod
btn_player1.addEventListener("click", () => (activePlayer = "player1"));
btn_player2.addEventListener("click", () => (activePlayer = "player2"));

for (let i = 0; i < boxes.length; i++) {
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

    checkForWin();
  });
}

function funPlayX(boxIndex) {
  let obj = new boxObj("true", "X");
  boxesObjects[boxIndex] = obj;
  boxes[boxIndex].innerHTML = "<p>X<p>";
}

function funPlayCircle(boxIndex) {
  let obj = new boxObj("true", "O");
  boxesObjects[boxIndex] = obj;
  boxes[boxIndex].innerHTML = "<p>O<p>";
}

function checkForWin() {
  //if()
}

function isOccupied(boxIndex) {}
