import {createAd, SIMILAR_AD_COUNT} from './data.js'

const similarAd = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
similarAd;
