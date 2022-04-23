var inputBox = document.getElementById("inputBox");

var invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


var randomNum = Math.floor(Math.random() * 101);
var btn = document.querySelector(".btn");
var result = document.querySelector(".result");
var range = document.querySelector(".heading2");
var count = document.querySelector(".count");
var num = 10;
count.innerHTML = num;

function main() {
  num--
  count.innerHTML = num;
  if (Number(inputBox.value) > randomNum) {
    range.innerHTML = "Too High";
    inputBox.value = "";
  } else if (Number(inputBox.value) === randomNum) {
    result.innerHTML = "You Won";
    range.innerHTML = "";
    window.setTimeout(function () {
      window.location.reload();
    }, 2000);
  } else if (Number(inputBox.value) < randomNum) {
    range.innerHTML = "Too Low";
    inputBox.value = "";
  }

  if (num === 0) {
    result.innerHTML = "You Lose";
    window.setTimeout(function () {
      window.location.reload();
    }, 2000);
  }
}

btn.onclick = function () {
  main();
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    main();
  }
});