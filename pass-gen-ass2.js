const passwordInput = document.querySelector('.password-input');
const generateButton = document.querySelector('.generate-button');
const copyButton = document.querySelector('.copy-button');

// Show welcome message
window.addEventListener('load', () => {
    alert('Welcome! Please enter your name to generate a password.');
});

generateButton.addEventListener('click', () => {
    const name = prompt('Please enter your name:');

    if (name) {
        const generatedPassword = generatePassword(name);
        passwordInput.value = generatedPassword;
        showConfirmation('Password generated. Do you want to copy it?', () => {
            copyPassword(generatedPassword);
        });
    }
});

copyButton.addEventListener('click', () => {
    copyPassword(passwordInput.value);
});

function generatePassword(name) {
    const content = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const shuffledContent = shuffleString(content);

    const nameLength = Math.ceil(name.length * 0.75); // Change the factor to control the amount of name included
    const shuffledName = shuffleString(name.substring(0, nameLength));

    const password = shuffledName + shuffledContent.substring(0, 7);
    return password;
}

function shuffleString(string) {
    let shuffledString = '';
    const chars = string.split('');

    while (chars.length > 0) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        shuffledString += chars.splice(randomIndex, 1)[0];
    }

    return shuffledString;
}



function showConfirmation(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

function copyPassword(password) {
    passwordInput.value = password;
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copyButton.textContent = 'Password Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy Password';
    }, 2000); // Reset button text after 2 seconds
}


