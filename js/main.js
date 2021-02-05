'use strict'

const isRangeValid = (min, max) => min >= 0 && max >= 0 && !(min >= max);

const getRandomInteger = (min, max) => {
  if(!isRangeValid(min, max)) {
    return null;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, decimals = 1) => {
  if(!isRangeValid(min, max)) {
    return null;
  }
  const result = Math.random() * (max - min) + min;
  return result.toFixed(decimals);
}

getRandomInteger(1.17, 55);
getRandomFloat(0.737, 1.23, 2);
