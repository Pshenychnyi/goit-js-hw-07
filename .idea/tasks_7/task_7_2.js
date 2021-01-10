const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const elementRef = document.querySelector('#ingredients');
console.log(elementRef);

const addItem = product => {
    const createdElement = document.createElement('li');
    createdElement.textContent = product;
    return createdElement;
};

const ingredientsMap = ingredients.map(ingredient => addItem(ingredient));
elementRef.append(...ingredientsMap);

