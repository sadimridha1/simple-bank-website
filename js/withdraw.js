document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = getInputById('withdraw-input');
    
    const getWithdrawInput = document.getElementById('total-withdraw');
    const withdrawAmount = getElementByIdAmount('total-withdraw');
    const totalWithdraw = withdrawAmount + withdrawInput;
    getWithdrawInput.innerText = totalWithdraw;
   
    const getBlanceInput = document.getElementById('total-blance');
    const getBlance = getBlanceElementById('total-blance');

    const finalBlance = getBlance - withdrawInput;
    getBlanceInput.innerText = finalBlance;
    console.log(finalBlance)
}) 