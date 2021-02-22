const addForm = document.querySelector('.ad-form');
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
