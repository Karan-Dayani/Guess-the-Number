var inputBox = document.getElementById("inputBox");

var invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


var randomNum = Math.floor(Math.random()*101);
var btn = document.querySelector(".btn");

btn.onclick = function() {
  console.log(inputBox.value)
}