import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";

const formData = {};

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(onTextAreaInput, 500));
form.addEventListener('submit', onButtonClick);

updateForm();

function onTextAreaInput(evt) {
    formData.email = form.email.value;
    formData.message = form.message.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function onButtonClick(evt) {
    evt.preventDefault();

    const formDataToSend = new FormData(evt.currentTarget);
    formDataToSend.forEach((value, name) => {
    formData[name] = value;
    });

    evt.currentTarget.reset();

    localStorage.removeItem(KEY);
}

function updateForm() {
    const savedMessage = localStorage.getItem(KEY);

    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
    }
  
  console.log(savedMessage);
};