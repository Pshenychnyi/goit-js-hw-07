const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const elementRef = document.querySelector('#gallery');
console.log(elementRef);

const createNewElement = image => {
    const createdItem = document.createElement('li');
    createdItem.textContent = image['alt'];
    createdItem.classList.add('image_gl');


    const imageString = `<img src="${image['url']}">`;
    createdItem.insertAdjacentHTML('beforeend', imageString);
    return createdItem;
};

const elementsList = images.map(image => createNewElement(image));
elementRef.append(...elementsList)

