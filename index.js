var inputBox = document.getElementById("inputBox");
var randomNum = Math.floor(Math.random()*101)
var inValue = inputBox.innerHTML
var btn = document.querySelector(".btn")


btn.onclick(()=>{
    console.log(inValue)
})


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