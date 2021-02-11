const isRangeValid = (min, max) => min >= 0 && max >= 0 && !(min >= max);

let getRandomInteger = (min, max) => {
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

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArrayValues = (arrayName) => {
  return arrayName.slice(getRandomInteger(0, arrayName.length - 1));
}

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArrayValues}
