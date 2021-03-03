import './form.js';
import './map.js';
import {getData} from './api.js';
import {createAdList} from './map.js'
import {setFormSubmit} from './form.js'

getData((data) => {
  createAdList(data);
});

setFormSubmit();
