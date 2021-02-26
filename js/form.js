const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const addForm = document.querySelector('.ad-form');
const fieldsetsAddForm = addForm.querySelectorAll('fieldset');
const titleAd = addForm.querySelector('#title');
const typeProperty = addForm.querySelector('#type');
const priceInput = addForm.querySelector('#price');
const roomNumber = addForm.querySelector('#room_number');
const capacity = addForm.querySelector('#capacity');
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


titleAd.addEventListener('invalid', () => {
  if (titleAd.validity.valueMissing) {
    titleAd.setCustomValidity('Обязательное поле')
  } else {
    titleAd.setCustomValidity('');
  }
});


titleAd.addEventListener('input', () => {
  const valueLength = titleAd.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleAd.setCustomValidity('Еще '+ (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleAd.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleAd.setCustomValidity('');
  }

  titleAd.reportValidity();
});


priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;

  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity('Цена не может быть больше ' + MAX_PRICE);
  } else {
    priceInput.setCustomValidity('');
  }
});

typeProperty.addEventListener('change', () => {
  const minValue = minPrice[typeProperty.value];
  priceInput.min = minValue;
  priceInput.placeholder = minValue;
});

const checkPlace = () => {
  if (roomNumber.value === '100' && capacity.value !== '0') {
    capacity.setCustomValidity('Выберите вариант "Не для гостей"');
  } else if (roomNumber.value !== '100' && capacity.value === '0') {
    capacity.setCustomValidity('Выберите другой вариант');
  } else if (roomNumber.value < capacity.value) {
    capacity.setCustomValidity('Выберите меньшее число гостей');
  } else {
    capacity.setCustomValidity('');
  }
};

capacity.addEventListener('change', () => {
  checkPlace();
});

roomNumber.addEventListener('change', () => {
  checkPlace();
});


timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {activateForm};
