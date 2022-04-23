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

btn.onclick = function () {
    if (Number(inputBox.value) > randomNum) {
        result.innerHTML = "Too High";
    } else if (Number(inputBox.value) === randomNum) {
        result.innerHTML = "You won";
    } else if (Number(inputBox.value) < randomNum) {
        result.innerHTML = "Too Low";
    }
}