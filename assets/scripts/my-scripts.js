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
function add() {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
    writeToLog('Add',initialResult,enteredNumber,currentResult);
    
}
function subtract() {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
    writeToLog('Subtract',initialResult,enteredNumber,currentResult);
    
}
function multiply() {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeToLog('Multiple',initialResult,enteredNumber,currentResult);
    
}
function divide() {
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
    writeToLog('Divide',initialResult,enteredNumber,currentResult);
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

