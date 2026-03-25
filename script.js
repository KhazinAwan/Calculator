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

    if(operator == '*') return multiplication(num1, num2)

    if(operator == '/') return division(num1, num2)

}

console.log(operate(10 , 5 , '+'))
console.log(operate(10 , 5 , '-'))
console.log(operate(10 , 5 , '*'))
console.log(operate(10 , 5 , '/'))