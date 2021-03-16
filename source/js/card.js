'use strict';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const propertyType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const createCard = (createAdList) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardFeatures = cardElement.querySelector('.popup__features');
  const cardPhotos = cardElement.querySelector('.popup__photos');
  const photo = cardElement.querySelector('.popup__photo');

  const generateFeatures = () => {
    cardFeatures.innerHTML = '';
    createAdList.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + createAdList.offer.features[i]);
      cardFeatures.appendChild(feature);
    });
  };

  const generatePhotos = () => {
    cardPhotos.innerHTML = '';
    createAdList.offer.photos.forEach((item, i) => {
      photo.src = createAdList.offer.photos[i];
      cardPhotos.appendChild(photo.cloneNode(true));
    });
  };

  cardElement.querySelector('.popup__title').textContent = createAdList.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = createAdList.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = createAdList.offer.price + ' ₽/ночь';
  cardElement.querySelector('.popup__type').textContent = propertyType[createAdList.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = createAdList.offer.rooms + ' комнаты для ' + createAdList.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + createAdList.offer.checkin + ', выезд до ' + createAdList.offer.checkout;
  cardElement.querySelector('.popup__description').textContent = createAdList.offer.description;
  cardElement.querySelector('.popup__avatar').src = createAdList.author.avatar;
  generateFeatures();
  generatePhotos();

  return cardElement;
};

export { createCard };
