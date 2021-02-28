const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', onCheckNumberOfInput);


function onCheckNumberOfInput(event) {
    const input = event.currentTarget
    inputRef.classList.add('invalid')
    
    if (input.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    }
}

