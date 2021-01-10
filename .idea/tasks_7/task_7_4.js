const minusButton = document.querySelector('button[data-action = "decrement"]');
const plusButton = document.querySelector('button[data-action = "increment"]');
const displayValue = document.querySelector('#value');

let counterValue = 0;

minusButton.addEventListener('click', () => {
    decrement();
    updateValue(counterValue);
});

plusButton.addEventListener('click', () => {
    increment();
    updateValue(counterValue);
});

const updateValue = (number) => {
    displayValue.textContent = number;
};

const increment = () => {
    counterValue += 1;
};

const decrement = () => {
    counterValue -= 1;
};