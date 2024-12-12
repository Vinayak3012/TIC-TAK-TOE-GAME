//new things i learn and search
// Parse, Stringify, parseint, session storage, location reload

let RECORD = [
  ["$", "$", "$"],
  ["$", "$", "$"],
  ["$", "$", "$"],
];

// session STORAGE
sessionStorage.setItem("turn", "true");
sessionStorage.setItem("record", JSON.stringify(RECORD));

//SELECT ITEMS
let note = document.querySelector("#Note");
let allBtns = document.querySelectorAll(".row");
let win = document.querySelector(".inner");
let message = document.querySelector(".message");

//Working Method
function checkEntry(entry) {
  //Vertical and horizontal of X
  if (entry[0][0] == "X" && entry[1][0] == "X" && entry[2][0] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][1] == "X" && entry[1][1] == "X" && entry[2][1] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][2] == "X" && entry[1][2] == "X" && entry[2][2] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][0] == "X" && entry[0][1] == "X" && entry[0][2] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[1][0] == "X" && entry[1][1] == "X" && entry[1][2] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[2][0] == "X" && entry[2][1] == "X" && entry[2][2] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  //Vertical and horizontal of O
  if (entry[0][0] == "O" && entry[1][0] == "O" && entry[2][0] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][1] == "O" && entry[1][1] == "O" && entry[2][1] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][2] == "O" && entry[1][2] == "O" && entry[2][2] == "O") {
    win.innerText = "Congratulation !!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][0] == "O" && entry[0][1] == "O" && entry[0][2] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[1][0] == "O" && entry[1][1] == "O" && entry[1][2] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[2][0] == "O" && entry[2][1] == "O" && entry[2][2] == "O") {
    win.innerText = "Congratulation !!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  //Cross of O
  if (entry[0][0] == "O" && entry[1][1] == "O" && entry[2][2] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][2] == "O" && entry[1][1] == "O" && entry[2][0] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  //Cross of X
  if (entry[0][0] == "X" && entry[1][1] == "X" && entry[2][2] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][2] == "X" && entry[1][1] == "X" && entry[2][0] == "X") {
    win.innerText = "Congratulation!  Player 2 (X) Win :)";
    message.style.display = "block";
    resetGame();
  }

  //Cross of O
  if (entry[0][0] == "O" && entry[1][1] == "O" && entry[2][2] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  if (entry[0][2] == "O" && entry[1][1] == "O" && entry[2][0] == "O") {
    win.innerText = "Congratulation!  Player 1 (O) Win :)";
    message.style.display = "block";
    resetGame();
  }
  //For Tied
  if (
    (entry[0][0] == "X" || entry[0][0] == "O") &&
    (entry[0][1] == "X" || entry[0][1] == "O") &&
    (entry[0][2] == "X" || entry[0][2] == "O") &&
    (entry[1][0] == "X" || entry[1][0] == "O") &&
    (entry[1][1] == "X" || entry[1][1] == "O") &&
    (entry[1][2] == "X" || entry[1][2] == "O") &&
    (entry[2][0] == "X" || entry[2][0] == "O") &&
    (entry[2][1] == "X" || entry[2][1] == "O") &&
    (entry[2][2] == "X" || entry[2][2] == "O")
  ) {
    win.innerText = "Match Tied!";
    message.style.display = "block";
    resetGame();
  }
}

function addEntry(btn) {
  let entry = JSON.parse(sessionStorage.getItem("record"));
  let title = parseInt(btn.title);
  switch (title) {
    case 1:
      entry[0][0] = btn.children[0].innerText;
      break;
    case 2:
      entry[1][0] = btn.children[0].innerText;
      break;
    case 3:
      entry[2][0] = btn.children[0].innerText;
      break;
    case 4:
      entry[0][1] = btn.children[0].innerText;
      break;
    case 5:
      entry[1][1] = btn.children[0].innerText;
      break;
    case 6:
      entry[2][1] = btn.children[0].innerText;
      break;
    case 7:
      entry[0][2] = btn.children[0].innerText;
      break;
    case 8:
      entry[1][2] = btn.children[0].innerText;
      break;
    case 9:
      entry[2][2] = btn.children[0].innerText;
      break;
    default:
      console.log("something went wrong:(");
  }
  sessionStorage.setItem("record", JSON.stringify(entry));
  checkEntry(entry);
}

function btnPress() {
  let btn = this;
  let val = sessionStorage.getItem("turn");
  if (btn.children[0].innerText == "O" || btn.children[0].innerText == "X") {
    note.innerText = "Oops!  Already Filled";
  } else {
    if (val == "true") {
      btn.children[0].innerText = "O";
      sessionStorage.setItem("turn", "false");
      addEntry(btn);
      note.innerText = "Turn - Player 2 ( X )";
    }
    if (val == "false") {
      btn.children[0].innerText = "X";
      sessionStorage.setItem("turn", "true");
      addEntry(btn);
      note.innerText = "Turn - Player 1 ( O )";
    }
  }
}
function resetGame() {
  setTimeout(() => {
    sessionStorage.setItem("record", JSON.stringify(RECORD));
    sessionStorage.setItem("turn", "true");
    allBtns.forEach((btn) => (btn.children[0].innerText = ""));
    note.innerText = "Player 1 With - O & Player 2 With - X";
  }, 200);

  //OR
  // location.reload(true);
}
function nextGame() {
  setTimeout(() => {
    message.style.display = "none";
    note.innerText = "Player 1 With - O & Player 2 With - X";
  }, 500);
}

for (row of allBtns) {
  row.addEventListener("click", btnPress);
}
