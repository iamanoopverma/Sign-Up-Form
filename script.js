function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;
    const userConfirmPassword = document.getElementById("userConfirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");
    if (firstName.trim() === '' || lastName.trim() === '' || userEmail.trim() === '' || userPassword.trim() === '' || userConfirmPassword.trim() === '') {
        errorMessage.innerHTML = "Please Fill All Details Carefully!";
        return false;
    }
    if (userPassword !== userConfirmPassword) {
        errorMessage.innerHTML = "Password Missmatch";
        return false;
    }
    else {
        if (isValidLength(userPassword) == 0) {
            errorMessage.innerHTML = "Password length should be 8 to 12 character!";
            return false;
        }
        if (!isContainsAlpha(userPassword)||!isContainsSpecialCharacter(userPassword)||!isContainsDigit(userPassword)) {
            errorMessage.innerHTML = "Password should be contains atleast one alphabet,one digit and one special character!";
            return false;
        }
    }
}

// for show password funcitonality
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('userPassword');
    const confirmPasswordField=document.getElementById('userConfirmPassword');
    const showPasswordCheckbox = document.getElementById('showPassword');

    showPasswordCheckbox.addEventListener('change', function() {
        if (showPasswordCheckbox.checked) {
            passwordField.type = 'text';
            confirmPasswordField.type='text';
        } else {
            passwordField.type = 'password';
            confirmPasswordField.type='password';
        }
    });
});

function isValidLength(pwd) {
    if (pwd.length >= 8 && pwd.length <= 12) {
        return true;
    }
    return false;
}
function isContainsAlpha(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z' || pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z') {
            return true;
        }
    }
    return false;
}
function isContainsDigit(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.charAt(i) >= 0 && pwd.charAt(i) <= 9) {
            return true;
        }
    }
    return false;
}
function isContainsSpecialCharacter(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.charAt(i)>='a' && pwd.charAt(i)<='z' || pwd.charAt(i)>='A' && pwd.charAt(i)<='Z'||pwd.charAt(i)>=0 && pwd.charAt(i)<=9) {

        }
        else{
            return true;
        }
    }
}



