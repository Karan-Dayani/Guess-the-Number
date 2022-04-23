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
var result = document.querySelector(".result")
var range = document.querySelector(".heading2")

btn.onclick = function () {
    if (Number(inputBox.value) > randomNum) {
        range.innerHTML = "Too High";
    } else if (Number(inputBox.value) === randomNum) {
        result.innerHTML = "You won";
    } else if (Number(inputBox.value) < randomNum) {
        range.innerHTML = "Too Low";
    }
}