const addForm = document.querySelector('.ad-form');
const fieldsetsAddForm = addForm.querySelectorAll('fieldset');
const typeProperty = addForm.querySelector('#type');
const priceInput = addForm.querySelector('#price');
const timeIn = addForm.querySelector('#timein');
const timeOut = addForm.querySelector('#timeout');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const deactivateForm = () => {
  addForm.classList.add('ad-form--disabled');

  fieldsetsAddForm.forEach((element) => {
    element.disabled = true;
  });
};

deactivateForm();

const activateForm = () => {
  addForm.classList.remove('ad-form--disabled');

  fieldsetsAddForm.forEach((element) => {
    element.disabled = false;
  });
};

typeProperty.addEventListener('change', () => {
  const minValue = minPrice[typeProperty.value];
  priceInput.min = minValue;
  priceInput.placeholder = minValue;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {activateForm};
