let firstOperand = ""
let operator = ""
let secondOperand = ""

let operators = ["+" , "-" , "*" , "/"]

const MAX_LENGTH = 10

function addition(num1 , num2) {

    return num1 + num2
}

function subtraction(num1 , num2) {

    return num1 - num2
}

function multiplication(num1 , num2) {

    return num1 * num2
}

function division(num1 , num2) {

    if(num2 === 0) return "ERROR"

    return num1 / num2
}

function checkKey(e) {

    e.preventDefault()

    if((e.key >= "0"  &&  e.key <= "9") || e.key === ".") { handleDigits(e.key) }

    else if(operators.includes(e.key)) { 

        if(e.key === "/") { handleOperations("÷")}

        else if(e.key === "*") { handleOperations("X")}

        else if(e.key === "=" || e.key === "Enter") {handleOperations("=")}

        else { handleOperations(e.key)}
        
    }

    else {

        if(e.key === "Escape" || e.key === "C" || e.key === "c") { handleControls("C")}

        else if(e.key === "Backspace") { handleControls("⌫")}
    }

}

function operate(num1 , num2 , operator) {

    if(operator === '+') return addition(num1, num2)

    if(operator === '-') return subtraction(num1, num2)

    if(operator === 'X') return multiplication(num1, num2)

    if(operator === '÷') return division(num1, num2)

}

function handleOperand(operand , value) {

    if(operand.length >= MAX_LENGTH) return operand

    if(value === ".") {

        if(operand.includes(".")) { return operand }
        
        if(operand === "") { operand += "0."}

        else { operand += value}

        return operand

    }

    else if(value === "+/-") {

        if(operand === "") return operand

        if(operand[0] !== "-") {
            operand = "-" + operand
        }

        else if(operand[0] === "-") {

            operand = operand.slice(1, operand.length)
        }
    }

    else {

        operand += value
    }

    return operand
}

function handleDigits(value) {

    if(operator === "")  {  
        
        firstOperand = handleOperand(firstOperand, value)
        display.textContent = firstOperand || 0
    
    }

    else    {  
        
        secondOperand = handleOperand(secondOperand, value)
        display.textContent = secondOperand || 0
    
    }
}

function handleOperations(argOperator) {

    if(argOperator === "=" && secondOperand === "")  return

    else if(firstOperand === "") return

    else if(secondOperand === "") operator = argOperator

    else {

        let result = operate(Number(firstOperand) , Number(secondOperand) , operator)

        if(result === "ERROR") {

            firstOperand = ""
            operator = ""
            secondOperand = ""

            display.textContent = result
        }

        else {

            result = Math.round(result * 100000) / 100000

            firstOperand = String(result)
            secondOperand = ""
            operator = ""

            if(result.toString().length >= MAX_LENGTH) {

                display.textContent = result.toExponential(5)
            }

            else {

                display.textContent = result
            }

            if(argOperator !== "=") operator = argOperator
        }

    }
}

function handleControls(option) {

    if(option === "C") {

        firstOperand = operator = secondOperand = ""
        display.textContent = 0
    }

    else if(option === "⌫") {

        if(operator === "") {

            firstOperand = firstOperand.slice(0 , (firstOperand.length - 1))
            display.textContent = firstOperand || 0

        }

        else {

            secondOperand = secondOperand.slice(0 , (secondOperand.length - 1))
            display.textContent = secondOperand || 0

        }
    }

}

const digit = document.querySelector(".digits")
const operation = document.querySelector(".operators")
const display = document.querySelector(".display")
const control = document.querySelector(".controls")

digit.addEventListener("click" , (e) =>  {

    if(e.target.tagName === "BUTTON") { handleDigits(e.target.textContent)}
})

operation.addEventListener("click" , (e) => {

    if(e.target.tagName === "BUTTON") { handleOperations(e.target.textContent)}

})

control.addEventListener("click" , (e) => {

    if(e.target.tagName === "BUTTON") { handleControls(e.target.textContent)}

})


document.addEventListener("keydown", checkKey)

