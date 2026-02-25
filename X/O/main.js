const square = document.querySelectorAll(".square");
console.log(square);
let currentTurn = "X";
let bordArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let conter = 0;
let bolyan = false;
square.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    let value = e.getAttribute("value");
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    if (squareContent.textContent != bordArray[value]) {
      squareContent.textContent = currentTurn;
      bordArray[value] = currentTurn;
      conter += 1;
    }

    //   ? (squareContent.textContent = "")
    //   : (squareContent.textContent = currentTurn);
    currentTurn == "X" ? (currentTurn = "O") : (currentTurn = "X");
    console.log(bordArray);
    tcheckresolt();
    if (conter == 9) {
      alert("drew");
    }
  });
  console.log(e.value);
});
function tcheckresolt() {
  if (
    (bordArray[0] == bordArray[1] && bordArray[1] == bordArray[2]) ||
    (bordArray[3] == bordArray[4] && bordArray[4] == bordArray[5]) ||
    (bordArray[6] == bordArray[7] && bordArray[7] == bordArray[8]) ||
    (bordArray[0] == bordArray[3] && bordArray[3] == bordArray[6]) ||
    (bordArray[1] == bordArray[4] && bordArray[4] == bordArray[7]) ||
    (bordArray[2] == bordArray[5] && bordArray[5] == bordArray[8]) ||
    (bordArray[0] == bordArray[4] && bordArray[4] == bordArray[8]) ||
    (bordArray[2] == bordArray[4] && bordArray[4] == bordArray[6])
  ) {
    alert("add in file");
    bolyan = true;
  }
}
const button = document.querySelector(".action-btn");
button.addEventListener("click", () => {
  if (conter == 9 || bolyan) {
    for (let i = 0; i < 9; i++) {
      bordArray[i] = `${i}`;
    }
    square.forEach((e) => {
      e.textContent = "";
    });
  }
});
