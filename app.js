const previousOperandElement = document.querySelector(".previous_operand");
const currentOperandElement = document.querySelector(".current_operand");
const acButton = document.querySelector("#ac")
const delButton = document.querySelector("#del")
const equalsButton = document.querySelector("#equals")
const numbersButton = document.querySelectorAll(".numbers")
const operatorButton = document.querySelectorAll(".operator");
//====================================================


let previousOperand = "";
let currentOperand = "";
let operation = "";
//step 1==============================
function formetOutPut(num){
    const result = Number(num).toLocaleString("en");
    if(result !== "0"){
        return result;
    }else{
        return "";
    }
}
function updateDisplay(){
    currentOperandElement.innerHTML = formetOutPut(currentOperand);
    previousOperandElement.innerHTML = `${previousOperand} ${operation}`;
}

function appendNumber(number){
    currentOperand += number;
    
}
numbersButton.forEach(btn => {
    btn.addEventListener("click", function(){
        if(btn.textContent === "." && currentOperand.includes(".")) return;
        appendNumber(btn.textContent);
        updateDisplay()
    })
})
//step 2==========================
function choseOperator(operator){
   
    if(previousOperand){
        previousOperand = calculation();
    }else{
        previousOperand = currentOperand;
    }

    operation = operator;
    currentOperand = "";
}
operatorButton.forEach(btn =>{
    btn.addEventListener("click", function(){
        if(!currentOperand) return;
        choseOperator(btn.textContent);
        updateDisplay()
    })
})

function calculation(){
    switch(operation){
        case "%":
           return Number(previousOperand) % Number(currentOperand);
            break;
        case "÷":
           return Number(previousOperand) / Number(currentOperand);
            break;
        case "*":
            return Number(previousOperand) * Number(currentOperand);
            break;
        case "+":
            return Number(previousOperand) + Number(currentOperand);
            break;
        case "-":
            return Number(previousOperand) - Number(currentOperand);
            break;
    }
};

//step 3===============================
equalsButton.addEventListener("click", function(){
    if(!previousOperand) return;
    if(currentOperand){
        currentOperand = calculation();
    }else{
        currentOperand = previousOperand;
    }
    previousOperand = "";
    operation = "";
    updateDisplay()
})
//step 4 ===================
acButton.addEventListener("click", function(){
    previousOperand = "";
    currentOperand = "";
    operation = "";
    updateDisplay()
})
delButton.addEventListener("click", function(){
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay()
})