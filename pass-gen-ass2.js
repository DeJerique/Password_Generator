// const passwordInput = document.querySelector('.password-input');
// const generateButton = document.querySelector('.generate-button');
// const copyButton = document.querySelector('.copy-button');

// generateButton.addEventListener('click', () => {
//     const generatedPassword = generatePassword();
//     passwordInput.value = generatedPassword;
//     setTimeout(() => {
//         alert('Password generated!. Do you want to copy it?');
//       }, 5000);
// });

// copyButton.addEventListener('click', () => {
//     passwordInput.select();
//     passwordInput.setSelectionRange(0, 99999);
//     document.execCommand('copy');
//     copyButton.textContent = 'Copied!';
//     alert("Password Copied!")
//     setTimeout(() => {
//         copyButton.textContent = 'Copy';
//     }, 2000);
// });

// function generatePassword(length = 12) {
//     const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let password = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }

//     return password;
// }

const passwordInput = document.querySelector('.password-input');
const generateButton = document.querySelector('.generate-button');
const copyButton = document.querySelector('.copy-button');

generateButton.addEventListener('click', () => {
    const generatedPassword = generatePassword();
    passwordInput.value = generatedPassword;
    setTimeout(() => {
        copyPassword();
    }, 3000);
});

copyButton.addEventListener('click', () => {
    copyPassword();
});

function generatePassword(length = 12) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

function copyPassword() {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copyButton.textContent = 'Password Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy Password';
    }, 2000); // Reset button text after 2 seconds
}

