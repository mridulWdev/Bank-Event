// no.1  Using by onclick on submit button

// function loginSubmit() {
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

// }

//No.2  using by call submit button id to call a function via addEventListener

document.getElementById('login-submit').addEventListener('click', function () {
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
})