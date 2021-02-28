const counterValue = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

let counter = 0;

const increment = incrementRef.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
})

const decrement = decrementRef.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
})

console.log(decrement)