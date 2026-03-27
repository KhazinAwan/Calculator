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
const controls = document.querySelector(".controls")

digits.addEventListener("click" , (e) => {

    if(e.target.tagName === "BUTTON"){

        if(operator == "")  {

            if(firstOperand.includes(".") && e.target.textContent == ".") return

            else if(e.target.textContent == "+/-") {

                if(firstOperand == "") return


                if(firstOperand[0] != "-") {

                    firstOperand = "-" + firstOperand
                }

                else if(firstOperand[0] == "-") {

                    firstOperand = firstOperand.slice(1, firstOperand.length)
                }
            }

            else {

                firstOperand += e.target.textContent
            }

            display.textContent = firstOperand



        }

        else    {

            if(secondOperand.includes(".") && e.target.textContent == ".") return

            else if(e.target.textContent == "+/-") {

                if(secondOperand == "") return

                if(secondOperand[0] != "-") {

                    secondOperand = "-" + secondOperand
                }

                else if(secondOperand[0] == "-") {

                    secondOperand = secondOperand.slice(1, secondOperand.length)
                }

            }

            else {

                secondOperand += e.target.textContent
            }

            display.textContent = secondOperand

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
            operator = ""

            if(e.target.textContent != "=") {

                operator = e.target.textContent

            }
        }
    }
})

controls.addEventListener("click" , (e) => {

    if(e.target.tagName == "BUTTON") {

        if(e.target.textContent == "C") {

            firstOperand = operator = secondOperand = ""
            display.textContent = 0
        }

        else if(e.target.textContent == "⌫") {

            if(operator == "") {

                firstOperand = firstOperand.slice(0 , (firstOperand.length - 1))
                display.textContent = firstOperand

            }

            else {

                secondOperand = secondOperand.slice(0 , (secondOperand.length - 1))
                display.textContent = secondOperand

            }
        }

    }
})

