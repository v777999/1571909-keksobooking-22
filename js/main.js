/* global _:readonly */
import './form.js';
import './map.js';
import {getData} from './api.js';
import {createAdList} from './map.js'
import {setFormSubmit} from './form.js'
import {changeFilter} from './filter.js';

const RERENDER_DELAY = 500;

setFormSubmit();

getData((data) => {
  createAdList(data);
  changeFilter(_.debounce(() => createAdList(data), RERENDER_DELAY));
});

setFormSubmit();
