const numSelect = document.querySelectorAll("#num");
const screen = document.getElementById("result");
const actOperand = document.querySelectorAll("#operand");
const displayResult = document.getElementById("equate_result");
let result;
let p;
let firstNumber = 0;
let secondNumber = 0;
let calcSymbol;
let me;

for (const button of numSelect) {
    button.addEventListener("click", runAction)}

for (actionOperand of actOperand){
    actionOperand.addEventListener("click", checkCondition);}

displayResult.addEventListener("click", showResult)

function appendValue(e){
            result = e.target.innerText;
            screen.innerHTML += result;
            console.log(result)
}

function runAction(e){
        
            if(screen.innerText == 0){
                screen.innerText = "";
                appendValue(e)
            }
    
            else if(result === '.'){
                appendValue(e);
            }
    
            else{
                appendValue(e)
            }   
}

function checkCondition(e){
        calcSymbol = e.target.innerHTML;
        console.log(calcSymbol);
        if(firstNumber == 0){
            firstNumber = screen.innerText;
            screen.innerText = "0";
            console.log("This is the first Value " + firstNumber);
            console.log("This is the Operation to be executed " + calcSymbol);
           
        }
        else if (secondNumber == "0"){
            secondNumber = screen.innerText;
            screen.innerText = "This is the result: ";
            console.log("This is the second value " + secondNumber);
        }
        else{
            console.log("error");
        }
            
}

function showResult(){
    if(calcSymbol == "+"){
        addNum();
    }
    else{
        screen.innerText = "Nothing to show";
    }
}

function addNum(){
    me = firstNumber + secondNumber;
    console.log(me);
}

function subNum(){
    screen.innerText = firstNumber - secondNumber;
}