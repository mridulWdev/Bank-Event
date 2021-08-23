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

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    // debugger;
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
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

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositTotal = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositTotal);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    // console.log(depositeTotalAmount);


    // update account balance after new deposit
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const depositAmount = getInput('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }


});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // // console.log(withdrawAmountText);
    // withdrawInput.value = '';

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalAmount = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdrawTotalAmount);
    // withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // update balance after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // // const currentBalance = getBalance('balance-total');
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if (withdrawAmount > currentBalance) {
        console.log('you input wrong amount')
    }



})