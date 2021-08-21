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


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    depositInput.value = '';
    // console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTotal);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // console.log(depositeTotalAmount);

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);
    withdrawInput.value = '';
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalAmount);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})