const inputRef = document.querySelector('div#controls > input');
const createButtonRef = document.querySelector('button[data-action = "render"]');
const destroyButtonRef = document.querySelector('button[data-action = "destroy"]');
const createdItemsSpaceRef = document.querySelector('div#boxes');

console.log(createdItemsSpaceRef)

inputRef.addEventListener('input', getAmount);

createButtonRef.addEventListener('click', addMultipleItems);

destroyButtonRef.addEventListener('click', desproyCeatedItems);

function getAmount() {
    return inputRef.value;
}

function addMultipleItems() {
    let heightValue = 30;
    let widthValue = 30;

    for (let i = 0; i < getAmount(); i++) {
        createBoxes(createBoxe(heightValue, widthValue));
        heightValue += 10;
        widthValue += 10;
    }
}

function createBoxe(heightValue, widthValue) {
    const div = document.createElement('div')
    div.style.cssText = `background: ${random_rgba()}; height : ${heightValue}px; width : ${widthValue}px`;
    return div;
}

function createBoxes(el) {
    createdItemsSpaceRef.appendChild(el);
}

function desproyCeatedItems() {
    createdItemsSpaceRef.textContent = '';
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}