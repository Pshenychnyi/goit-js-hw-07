const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#name-output');

inputField.addEventListener('input', setValue);

function setValue(e) {
    outputField.textContent = e.target.value;
    if (outputField.textContent.length === 0) {
        outputField.textContent = 'незнакомец';
    }
}


