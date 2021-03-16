'use strict';
import { isEscEvent, isClickEvent } from './util.js';
import { sendData } from './api.js';
import { mainMarker, CENTER_LAT, CENTER_LNG } from './map.js';
import { clearPreviewImages } from './avatar.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const mapFilters = document.querySelector('.map__filters');
const addForm = document.querySelector('.ad-form');

const titleAd = addForm.querySelector('#title');
const typeProperty = addForm.querySelector('#type');
const priceInput = addForm.querySelector('#price');
const roomNumber = addForm.querySelector('#room_number');
const capacity = addForm.querySelector('#capacity');
const timeIn = addForm.querySelector('#timein');
const timeOut = addForm.querySelector('#timeout');
const resetButton = addForm.querySelector('.ad-form__reset');
const addressForm = addForm.querySelector('#address');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
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
    titleAd.setCustomValidity('Еще ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleAd.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
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

const resetAddForm = () => {
  addForm.reset();
  mapFilters.reset();
  mainMarker.setLatLng({ lat: CENTER_LAT, lng: CENTER_LNG });
  addressForm.value = `${CENTER_LAT}, ${CENTER_LNG}`;
  clearPreviewImages();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetAddForm();
});

const closeMessage = (evt) => {
  if (isEscEvent(evt) || isClickEvent(evt)) {
    evt.preventDefault();
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', closeMessage);
    document.removeEventListener('mousedown', closeMessage);
  }
};

const showSuccessMessage = () => {
  main.append(successMessage);
  resetAddForm();
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
};

const showErrorMessage = () => {
  main.append(errorMessage);
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
}

const setFormSubmit = () => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => showSuccessMessage(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

export { setFormSubmit };
