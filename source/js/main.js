'use strict';
import 'leaflet/dist/leaflet.css';
import debounce from 'lodash/debounce';
import './form.js';
import './map.js';
import { getData } from './api.js';
import { createAdList, deactivateForm, deactivateFilters } from './map.js'
import { setFormSubmit } from './form.js'
import { changeFilter } from './filter.js';
import './avatar.js';

const RERENDER_DELAY = 500;

deactivateForm();
deactivateFilters();

getData((data) => {
  createAdList(data);
  changeFilter(debounce(() => createAdList(data), RERENDER_DELAY));
});

setFormSubmit();
