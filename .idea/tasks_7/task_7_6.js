const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', handleInputBlur);

function getInputLength() {
    return parseInt(inputField.getAttribute('data-length'));
}

function handleInputBlur(e) {
    (getInputLength() <= e.target.value.length) ? inputField.setAttribute('class', 'valid') :
        inputField.setAttribute('class', 'invalid');
};