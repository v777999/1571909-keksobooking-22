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

const numIncline = (num, words) => {
  num = Math.abs(num) % 100;
  let num1 = num % 10;
  if (num > 10 && num < 20) {
    return words[2];
  }
  if (num1 > 1 && num1 < 5) {
    return words[1];
  }
  if (num1 === 1) {
    return words[0];
  }
  return words[2];
}

const getDeleteChild = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.lastChild);
  }
};

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArrayValues, numIncline, getDeleteChild}
