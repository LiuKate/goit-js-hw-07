const inputField = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputField.addEventListener('input', onChangeName)

function onChangeName(event) { 
    nameEl.textContent = 'незнакомец';

    if (event.currentTarget.value) {
        nameEl.textContent = event.currentTarget.value;
    }
}
