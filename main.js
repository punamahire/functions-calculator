const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}
const subtract = (firstNum, secondNum) => {
    return firstNum - secondNum;
}
const multiply = (firstNum, secondNum) => {
    return firstNum * secondNum;
}
const divide = (firstNum,secondNum) => {
    return firstNum / secondNum;
}
const square = (num) => {
    return num * num;
}

const calculate = (operation, num1, num2) => {
    switch (operation) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
        case 'square':
            if (num1 != undefined) {
                console.log(square(num1));
                break;
            } else if (num2 != undefined) {
                console.log(square(num2));
                break;
            }
            console.log("Number is undefined");
            break;
        default:
            console.log("Wrong entry");
            break;
    }
}

calculate('add', 10, 20);
calculate('subtract', 40, 30);
calculate('multiply', 10, 10);
calculate('divide', 100, 10);
calculate('square', );
