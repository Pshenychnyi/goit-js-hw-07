const inputRef = document.querySelector('input#font-size-control');

const textRef = document.querySelector('#text');

inputRef.addEventListener('change', handleTextSize);


function handleTextSize() {
    textRef.style.fontSize = `${inputRef.value * 20}%`;
}