const defaultResult= 0;
let currentResult = defaultResult;
let logEntry=[];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber} `;
    outputResult(currentResult, calcDescription);
}
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const LogEntries={
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntry.push(LogEntries);
    console.log(logEntry);
}
function calculationResult(calculationType) {
    if (
        calculationType !== 'Add' &&
        calculationType !== 'Subtract' &&
        calculationType !== 'Multiply' &&
        calculationType !== 'Divide' 
    ){
        return;
    }

    // if (
    //     calculationType === 'Add' ||
    //     calculationType === 'Subtract' ||
    //     calculationType === 'Multiply' ||
    //     calculationType === 'Divide' 
    // ){
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    if(calculationType==='Add'){
        currentResult += enteredNumber;
        mathOperator='+';
    }
    else if (calculationType === 'Subtract'){
        currentResult -= enteredNumber;
        mathOperator='-';
    }
    else if(calculationType === 'Multiply'){
        currentResult *= enteredNumber;
        mathOperator='*';
    }
    else if(calculationType === 'Divide'){
        currentResult /= enteredNumber;
        mathOperator='/';
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);

}
function add() {
    calculationResult('Add');
    
}
function subtract() {
    calculationResult('Subtract');
    
}
function multiply() {
    calculationResult('Multiply');
    
}
function divide() {
    calculationResult('Divide');
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

