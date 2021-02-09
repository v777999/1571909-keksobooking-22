'use strict'

const isRangeValid = (min, max) => min >= 0 && max >= 0 && !(min >= max);

let getRandomInteger = (min, max) => {
  if(!isRangeValid(min, max)) {
    return null;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, decimals = 1) => {
  if(!isRangeValid(min, max)) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(decimals);
}

// getRandomInteger(1.17, 55);
// getRandomFloat(0.737, 1.23, 2);

// Module3-task1

const DESCRIPTION = [
  'Тихий район, уютно, вид на парк',
  'Центр города, выставки, музеи в двух шагах',
  'Бары, кафе, клубы рядом!',
  'Королевская обстановка',
];

const TITLE = [
  'Сдается помесячно',
  'Сдаю посуточно',
  'Срок аренды не меньше 1 года',
];

const PROPERTY_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const PROPERTY_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PROPERTY_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;

const SIMILAR_AD_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArrayValues = (arrayName) => {
  return arrayName.slice(getRandomInteger(0, arrayName.length - 1));
}

const createAd = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX,5) + ', ' + getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX,5),
      price: getRandomInteger(50,10000),
      type: getRandomArrayElement(PROPERTY_TYPE),
      rooms: getRandomInteger(1,99),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArrayValues(PROPERTY_FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayValues(PROPERTY_PHOTOS),
    },
    location: {
      x: getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX,5),
      y: getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX,5),
    },
  }
}

const similarAd = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
similarAd;
