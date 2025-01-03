let result = null;
let leftOperand = null;
let rightOperand = null;
let operator = null;
let displayValue = '0';

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (event)
{
    let target = event.target.closest(".operand");
    if (!target)
        return;

    updateDisplay(target.value);
});

function operate(leftOperand, rightOperand, operator)
{
    if (operator === '+')
        return leftOperand + rightOperand;
    else if (operator === '-')
        return leftOperand - rightOperand;
    else if (operator === '*')
        return leftOperand * rightOperand;
    else if (operator === '/')
    {
        if (rightOperand === 0)
            return "Lol u can't do that";

        return leftOperand / rightOperand;
    }
}

function updateDisplay(value)
{
    const display = document.querySelector(".display");

    if (displayValue === '0' || displayValue === 0)
    {
        displayValue = value;
    }
    else
    {
        displayValue += value;
    }

    display.innerText = displayValue;
}