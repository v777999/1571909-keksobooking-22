/*
import {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArrayValues} from './util.js';

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

const AVATAR = {
  min: 1,
  max: 8,
};

const PRICE = {
  min: 50,
  max: 10000,
};

const ROOMS = {
  min: 1,
  max: 9,
};

const GUESTS = {
  min: 1,
  max: 9,
};

const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;

const SIMILAR_AD_COUNT = 10;

const createAd = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(AVATAR.min, AVATAR.max) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX, 5) + ', ' + getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX, 5),
      price: getRandomInteger(PRICE.min, PRICE.max),
      type: getRandomArrayElement(PROPERTY_TYPE),
      rooms: getRandomInteger(ROOMS.min, ROOMS.max),
      guests: getRandomInteger(GUESTS.min, GUESTS.max),
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

const createAdList = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

export {createAdList, PROPERTY_TYPE};
*/
