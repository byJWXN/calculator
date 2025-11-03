
let firstNumber = ''
let secondNumber = ''
// let operator = ''
let userInput = ''

const displayEl = document.getElementById('user-input')

document.addEventListener('click', function(e){
    const type = e.target.dataset.type
    const value = e.target.dataset.value

    if (!type) return

    switch (type) {
        case "number": handleNumber(value)
            break
        case "operator": handleOperator(value)
            break
        case "equal": calculate()
            break
        case "clear": clearAll()
            break
        case "delete" : deleteDigit()
            break
    }
})

function handleNumber(value){
    if (userInput == '0'){
        userInput = value
        updateDisplay(userInput)
    } else {
        userInput += value
        updateDisplay(userInput)
    }

}

function handleOperator(op){
    firstNumber = Number(userInput)
    operator = op
    userInput = ''
    updateDisplay(op)

}

function updateDisplay(value){
    displayEl.textContent = value
}

function calculate(){
    secondNumber = Number(userInput)
    let result

    switch (operator){
        case "+": result = firstNumber + secondNumber
            break
        case '-': result = firstNumber - secondNumber
            break
        case "*": result = firstNumber * secondNumber
            break
        case "/": result = firstNumber / secondNumber
            break
    }
        updateDisplay(result)
}

function clearAll(){
    userInput = ''
    firstNumber = ''
    secondNumber = ''
    updateDisplay('0')
}

function deleteDigit(){
    userInput = userInput.slice(0, -1)
    if(userInput == ''){
        userInput = '0'
    }
    updateDisplay(userInput)
}