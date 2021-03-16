'use strict';
const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

const DEFAULT_TYPE = 'any';

const Price = {
  LOW: 10000,
  HIGH: 50000,
};

const filterPrice = (data) => {
  switch (housingPrice.value) {
    case 'low':
      return data.offer.price < Price.LOW;
    case 'middle':
      return data.offer.price >= Price.LOW && data.offer.price < Price.HIGH;
    case 'high':
      return data.offer.price >= Price.HIGH;
    default:
      return true;
  }
};

const filterFeatures = (data) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  return Array.from(checkedFeatures).every((input) => {
    return data.offer.features.includes(input.value);
  });
};

const createFilter = (data) => {

  if ((data.offer.type === housingType.value || housingType.value === DEFAULT_TYPE)
    && (data.offer.rooms === +housingRooms.value || housingRooms.value === DEFAULT_TYPE)
    && (filterPrice(data) || housingPrice.value === DEFAULT_TYPE)
    && (data.offer.guests === +housingGuests.value || housingGuests.value === DEFAULT_TYPE)
    && (filterFeatures(data))
  ) {
    return data;
  }
  return false;
};

const changeFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export { createFilter, changeFilter };
