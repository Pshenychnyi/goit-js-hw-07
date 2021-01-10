const titleRef = document.querySelectorAll('.item');
console.log(titleRef);
console.log('All atigories: ' + titleRef.length);

console.log(titleRef.forEach(element => {
    const elementContent =  element.querySelector('h2');
    console.log('Name of category item: ' + elementContent.textContent);

    const childrenCount = element.querySelectorAll('li')
    console.log('Count of items: ' + childrenCount.length)

    console.log(childrenCount.forEach(childElement => {
        console.log(childElement.textContent);
    }));
}));



