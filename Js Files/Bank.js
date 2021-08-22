// no.1  Using by onclick on submit button

function loginSubmit() {
    const userName = document.getElementById('user-email');
    const userNameValue = userName.value;
    const userPass = document.getElementById('user-pass');
    const userPassValue = userPass.value;
    if (userNameValue == 'sontan@gmail.com' && userPassValue == '12345') {
        window.location.href = 'Bank-Portal.html';
    }
    else {
        console.log("Error");
    }

}

//No.2  using by call submit button id to call a function via addEventListener

// document.getElementById('login-submit').addEventListener('click', function () {
//     const userName = document.getElementById('user-email');
//     const userNameValue = userName.value;
//     const userPass = document.getElementById('user-pass');
//     const userPassValue = userPass.value;
//     if (userNameValue == 'sontan@gmail.com' && userPassValue == '12345') {
//         window.location.href = 'Bank-Portal.html';
//     }
//     else {
//         console.log("Error");
//     }
// });

function getInput(inputId) {
    const input = document.getElementById(inputId);
    const newAmountText = input.value;
    const newAmount = parseFloat(newAmountText);
    input.value = '';
    return newAmount;
}

function updateTotalField(totoFeildAmount, amount) {
    const amountTotal = document.getElementById(totoFeildAmount);
    const previousAmount = amountTotal.innerText;
    const previousTotal = parseFloat(previousAmount);
    amountTotal.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    // depositInput.value = '';
    // console.log(depositAmount);
    const depositAmount = getInput('deposit-input');
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositTotal = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositTotal);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    // console.log(depositeTotalAmount);
    updateTotalField('deposit-total', depositAmount);

    // update account balance after new deposit
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    updateBalance(depositAmount, true);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // // console.log(withdrawAmountText);
    // withdrawInput.value = '';
    const withdrawAmount = getInput('withdraw-input');
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalAmount = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdrawTotalAmount);
    // withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    updateTotalField('withdraw-total', withdrawAmount);
    // update balance after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // // const currentBalance = getBalance('balance-total');
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    updateBalance(withdrawAmount, false);


})