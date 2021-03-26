import 'leaflet/dist/leaflet.css';
import debounce from 'lodash/debounce';
import './form.js';
import './map.js';
import { getData } from './api.js';
import { RERENDER_DELAY, createAdList } from './map.js'
//import { setFormSubmit } from './form.js'
import { changeFilter, setFilterReset } from './filter.js';
import './avatar.js';

getData((data) => {
  createAdList(data);
  setFilterReset(() => createAdList(data));
  changeFilter(debounce(() => createAdList(data), RERENDER_DELAY));
});

