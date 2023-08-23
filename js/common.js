
function getInputById(allInput){
    const getInput = document.getElementById(allInput);
    const getInputValue = getInput.value;
    const input = parseFloat(getInputValue);
    getInput.value = '';
    return input;
}
// deposit and withdraw ar blance find
function getElementByIdAmount(allAmount){
    const getAmountInput = document.getElementById(allAmount)
    const getAmountString = getAmountInput.innerText;
    const getAmountByNumber = parseFloat(getAmountString);
    return getAmountByNumber;        
}


function getBlanceElementById(blance){
    const getBlance = document.getElementById(blance)
    const getBlanceString = getBlance.innerText;
    const getBlanceNumber = parseFloat(getBlanceString);
    return getBlanceNumber;
}