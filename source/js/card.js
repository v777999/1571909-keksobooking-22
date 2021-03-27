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
    if (!createAdList.offer.features.length) {
      cardFeatures.remove();
      return;
    }
    cardFeatures.innerHTML = '';
    createAdList.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + createAdList.offer.features[i]);
      cardFeatures.appendChild(feature);
    });
  };

  const generatePhotos = () => {
    if (!createAdList.offer.photos.length) {
      cardPhotos.remove();
      return;
    }
    cardPhotos.innerHTML = '';
    createAdList.offer.photos.forEach((item, i) => {
      photo.src = createAdList.offer.photos[i];
      cardPhotos.appendChild(photo.cloneNode(true));
    });
  };

  const offerTitle = cardElement.querySelector('.popup__title');
  createAdList.offer.title ? offerTitle.textContent = createAdList.offer.title : offerTitle.remove();

  const offerAddress = cardElement.querySelector('.popup__text--address');
  createAdList.offer.address ? offerAddress.textContent = createAdList.offer.address : offerAddress.remove();

  const offerPrice = cardElement.querySelector('.popup__text--price');
  createAdList.offer.price ? offerPrice.textContent = createAdList.offer.price + ' ₽/ночь' : offerPrice.remove();

  const offerType = cardElement.querySelector('.popup__type');
  createAdList.offer.type ? offerType.textContent = propertyType[createAdList.offer.type] : offerType.remove();

  const offerCapacity = cardElement.querySelector('.popup__text--capacity');
  createAdList.offer.rooms && createAdList.offer.guests ? offerCapacity.textContent = createAdList.offer.rooms + ' комнаты для ' + createAdList.offer.guests + ' гостей' : offerCapacity.remove();

  const offerTime = cardElement.querySelector('.popup__text--time');
  createAdList.offer.checkin && createAdList.offer.checkout ? offerTime.textContent = 'Заезд после ' + createAdList.offer.checkin + ', выезд до ' + createAdList.offer.checkout : offerTime.remove();

  const offerDescription = cardElement.querySelector('.popup__description');
  createAdList.offer.description ? offerDescription.textContent = createAdList.offer.description : offerDescription.remove();

  const offerAvatar = cardElement.querySelector('.popup__avatar');
  createAdList.author.avatar ? offerAvatar.src = createAdList.author.avatar : offerAvatar.remove();

  generateFeatures();
  generatePhotos();

  return cardElement;
};

export { createCard };
