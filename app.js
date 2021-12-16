const inputEle = document.querySelector('input');
const showBtn = document.querySelector('.eye-icon-show');
const hideBtn = document.querySelector('.eye-icon-hide');
const textNotify = document.querySelector('.text-notify');
const container = document.querySelector('.container');

const regExpWeak = /[a-zA-Z]/;
const regExpMedium = /[0-9]/;
const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,.,(,)]/;

inputEle.addEventListener('input', () => {
    const valueInput = inputEle.value;
    if (valueInput) {
        if (valueInput.length <= 3 && (valueInput.match(regExpWeak)) || (valueInput.match(regExpMedium)) || (valueInput.match(regExpStrong))) {
            container.classList.add('weak');
            textNotify.innerHTML = 'Your password is too weak';
        }
        if (valueInput.length >= 3 && (valueInput.match(regExpWeak)) && (valueInput.match(regExpMedium)) || (valueInput.match(regExpStrong)) && (valueInput.match(regExpMedium)) || (valueInput.match(regExpWeak)) && (valueInput.match(regExpStrong))) {
            container.classList.add('medium');
            textNotify.innerHTML = 'Your password is medium';
        } else {
            container.classList.remove('medium');
        }
        if (valueInput.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) {
            container.classList.add('strong');
            textNotify.innerHTML = 'Your password is strong';
        } else {
            container.classList.remove('strong');
        }
    } else {
        textNotify.innerHTML = '';
        container.classList.remove('weak');
    }
});

showBtn.addEventListener('click', () => {
    inputEle.type = 'text';
    showBtn.style.visibility = 'hidden';
    hideBtn.style.visibility = 'visible';
})

hideBtn.addEventListener('click', () => {
    inputEle.type = 'password';
    hideBtn.style.visibility = 'hidden';
    showBtn.style.visibility = 'visible';
})