import {activateForm} from './form.js';
import {createAdList} from './data.js';
import {createCard} from './card.js';

const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select, fieldset');
const addressForm = document.querySelector('#address');
const CENTER_LAT = 35.6708;
const CENTER_LNG = 139.7372;
const ZOOM = 12;

const deactivateFilters = () => {
  mapFilters.classList.add('map__filters--disabled');

  filters.forEach((element) => {
    element.disabled = true;
  });
};

deactivateFilters();

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');

  filters.forEach((element) => {
    element.disabled = false;
  });
};

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    activateFilters();
    activateForm();
  })
  .setView({
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon (
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  },
);

const mainMarker = L.marker(
  {
    lat: CENTER_LAT,
    lng: CENTER_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

addressForm.value = `${CENTER_LAT}, ${CENTER_LNG}`;

mainMarker.on('moveend', () => {
  const lat = mainMarker.getLatLng().lat.toFixed(5);
  const lng = mainMarker.getLatLng().lng.toFixed(5);
  addressForm.value = `${lat}, ${lng}`;
});

const pinIcon = L.icon(
  {
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
);

createAdList.forEach((createAdList) => {
  const marker = L.marker(
    {
      lat: createAdList.location.x,
      lng: createAdList.location.y,
    },
    {
      icon: pinIcon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(
      createCard(createAdList),
    );
});