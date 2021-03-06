import './form.js';
import './map.js';
import {getData} from './api.js';
import {createAdList} from './map.js'
import {setFormSubmit} from './form.js'
import {changeFilter} from './filter.js';

setFormSubmit();

getData((data) => {
  createAdList(data);
  changeFilter(() => createAdList(data));
});

setFormSubmit();
