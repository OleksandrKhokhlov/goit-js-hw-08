const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('form input');
const formTextarea = document.querySelector('textarea');

let feedbackFormState = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

statusCheckStorage();

function onFormSubmit(evt) {
  evt.preventDefault();

  const saveDataForm = localStorage.getItem(STORAGE_KEY);

  if (formInputRef.value === '' || formTextarea.value === '') {
    alert('You need to fill in all fields of the form');
    return;
  }

  if (saveDataForm) {
    const parseSaveDataForm = JSON.parse(saveDataForm);
    console.log(parseSaveDataForm);
    feedbackFormState = {};
    localStorage.removeItem(STORAGE_KEY);
    formRef.reset();
  }
}

function onFormInput(evt) {
  const saveDataForm = localStorage.getItem(STORAGE_KEY);
  if (saveDataForm) {
    feedbackFormState = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}

function statusCheckStorage() {
  const saveDataForm = localStorage.getItem(STORAGE_KEY);

  if (saveDataForm) {
    const parseSaveDataForm = JSON.parse(saveDataForm);

    if (parseSaveDataForm.hasOwnProperty('email')) {
      formInputRef.value = parseSaveDataForm.email;
    }
    if (parseSaveDataForm.hasOwnProperty('message')) {
      formTextarea.value = parseSaveDataForm.message;
    }
  }
}
