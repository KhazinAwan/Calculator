let firstOperand = ""
let operator = ""
let secondOperand = ""

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

    return num1 / num2
}

function operate(num1 , num2 , operator) {

    if(operator == '+') return addition(num1, num2)

    if(operator == '-') return subtraction(num1, num2)

    if(operator == 'x') return multiplication(num1, num2)

    if(operator == '÷') return division(num1, num2)

}

/*console.log(operate(10 , 5 , '+'))
console.log(operate(10 , 5 , '-'))
console.log(operate(10 , 5 , '*'))
console.log(operate(10 , 5 , '/'))*/


const digits = document.querySelector(".digits")
const operations = document.querySelector(".operators")
const display = document.querySelector(".display")

digits.addEventListener("click" , (e) => {

    if(e.target.tagName === "BUTTON"){

        if(operator == "")  {

            firstOperand += e.target.textContent
            console.log(`${firstOperand}`)
        }

        else    {

            secondOperand += e.target.textContent
            console.log(`${secondOperand}`)

        }
    }
})

operations.addEventListener("click" , (e) => {

    if(e.target.tagName === "BUTTON") {

        if(e.target.textContent == "=" && secondOperand == "")  return

        if(secondOperand == "") {

            operator = e.target.textContent

        }

        else {

            const result = operate(Number(firstOperand) , Number(secondOperand) , operator)
            display.textContent = result

            firstOperand = String(result)
            secondOperand = ""

            if(e.target.textContent != "=") {

                operator = e.target.textContent

            }
        }
    }
})