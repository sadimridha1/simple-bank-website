document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = getInputById('deposit-input');
    const depositAmount = getElementByIdAmount('collect-deposit');
    
    const getDepo = document.getElementById('collect-deposit')
    const calculateDeposit = depositAmount + depositInput;
    getDepo.innerText = calculateDeposit;

    const blance = getBlanceElementById('total-blance')
    const getBlance = document.getElementById('total-blance');
    const totalBlance = depositInput + blance;
    console.log(totalBlance);
    getBlance.innerText = totalBlance;
}) 