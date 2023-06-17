const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const formInputRef = document.querySelector('form input');
const formTextarea = document.querySelector('textarea');

const feedbackFormState = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

statusCheckStorage();

function onFormSubmit(evt) {
  evt.preventDefault();

  const saveDataForm = localStorage.getItem(STORAGE_KEY);

  if (saveDataForm) {
    const parseSaveDataForm = JSON.parse(saveDataForm);
    console.log(parseSaveDataForm);
  }

  localStorage.removeItem(STORAGE_KEY);
  formRef.reset();
}

function onFormInput(evt) {
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}

function statusCheckStorage() {
  const saveDataForm = localStorage.getItem(STORAGE_KEY);

  if (saveDataForm) {
    const parseSaveDataForm = JSON.parse(saveDataForm);

    formInputRef.value = parseSaveDataForm.email;
    formTextarea.value = parseSaveDataForm.message;
  }
}
