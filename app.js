let ac = document.getElementById("ac")
let divide = document.getElementById("divide")
let multiply = document.getElementById("multiply")
let remove = document.getElementById("remove")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let subtract = document.getElementById("subtract")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let add = document.getElementById("add")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let equals = document.getElementById("equals")
let decimal = document.getElementById("decimal")
let zero = document.getElementById("zero")
let percentage = document.getElementById("percentage")
let userInput = document.getElementById("userInput")
let result = document.getElementById("result")
var audio = new Audio("audio.mp3");

audio.oncanplaythrough = function(){
// audio.play();
}

audio.loop = true;

audio.onended = function(){

}


seven.addEventListener("click", function () {
    userInput.innerHTML += 7
audio.play();
audio.loop = false
})
eight.addEventListener("click", function () {
    userInput.innerHTML += 8
    audio.play();
    audio.loop = false

})
nine.addEventListener("click", function () {
    userInput.innerHTML += 9
  audio.play();
    audio.loop = false

})
one.addEventListener("click", function () {
    userInput.innerHTML += 1
  audio.play();
    audio.loop = false

})
two.addEventListener("click", function () {
    userInput.innerHTML += 2
  audio.play();
    audio.loop = false

})
three.addEventListener("click", function () {
    userInput.innerHTML += 3
  audio.play();
    audio.loop = false

})
four.addEventListener("click", function () {
    userInput.innerHTML += 4
  audio.play();
    audio.loop = false

})
five.addEventListener("click", function () {
    userInput.innerHTML += 5
  audio.play();
    audio.loop = false

})
six.addEventListener("click", function () {
    userInput.innerHTML += 6
  audio.play();
    audio.loop = false

})
zero.addEventListener("click", function () {
    userInput.innerHTML += 0
     audio.play();
    audio.loop = false


})
add.addEventListener("click", function () {
    userInput.innerHTML += "+"
  audio.play();
    audio.loop = false

})
subtract.addEventListener("click", function () {
    userInput.innerHTML += "-"
  audio.play();
    audio.loop = false

})
multiply.addEventListener("click", function () {
    userInput.innerHTML += "*"
  audio.play();
    audio.loop = false

})
divide.addEventListener("click", function () {
    userInput.innerHTML += "/"
  audio.play();
    audio.loop = false

})
decimal.addEventListener("click", function () {
    userInput.innerHTML += "."
  audio.play();
    audio.loop = false

})
percentage.addEventListener("click", function () {
    userInput.innerHTML += "%"
  audio.play();
    audio.loop = false

})
ac.addEventListener("click", function () {
    userInput.innerHTML = ""
    result.innerHTML = ""
    audio.play();
    audio.loop = false
})
remove.addEventListener("click", function () {
    var input = userInput.innerHTML;
    userInput.innerHTML = input.slice(0, -1);
     audio.play();
    audio.loop = false

})
equals.addEventListener("click", function(){
    try {
        var expression = userInput.innerHTML;
        if (/(\+|\-|\*|\/|\%){2,}$/.test(expression)) {
            throw new Error("Invalid expression");
        }
        
        result.innerHTML = eval(expression);
        result.style.fontSize = "3.5rem" 
         audio.play();
    audio.loop = false
        if (isNaN(result.innerHTML) || !isFinite(result.innerHTML)) {
            throw new Error("Invalid expression");
            
        }
    } catch (error) {
        result.innerHTML = "Invalid Value";
        result.style.fontSize = "2.3rem"
        audio.play();
        audio.loop = false
    }

})