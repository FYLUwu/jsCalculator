
const display = document.querySelector(".display-output")
const buttons = document.querySelectorAll(".button")

const firstNumber = 0
const operator = ""
const secondNumber = 0

function init() {
    buttons.forEach(function(element) {element.addEventListener('click', function() {
        display.textContent = element.textContent
    })})
}

init()