const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const getAvatar = document.querySelector('.ad-form-header__input');
const showAvatar = document.querySelector('.ad-form-header__preview');
const getPhoto = document.querySelector('.ad-form__input');
const showPhoto = document.querySelector('.ad-form__photo');

const defaultAvatar = showAvatar.cloneNode(true);
const defaultPhoto = showPhoto.cloneNode(true);

const isFileTypeMatches = (extension) => {
  return FILE_TYPES.some((it) => {
    return extension.endsWith(it);
  })
}

const resetStyleAndInnerHTML = (resetElement, defaultElement) => {
  resetElement.innerHTML = defaultElement.innerHTML;
  resetElement.removeAttribute('style');
}

const clearPreviewImages = () => {
  resetStyleAndInnerHTML(showAvatar, defaultAvatar);
  resetStyleAndInnerHTML(showPhoto, defaultPhoto);
}

const setImageFile = (selector, preview) => {
  const file = selector.files[0];
  const fileName = file.name.toLowerCase();

  if (isFileTypeMatches(fileName)) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.style.display = 'flex';
      preview.style.alignItems = 'center';
      preview.style.justifyContent = 'center';
      preview.style.minWidth = preview.offsetWidth + 'px';
      preview.style.padding = '0';
      preview.innerHTML = '';

      const image = document.createElement('img');

      image.src = reader.result;
      image.style.maxWidth = preview.offsetWidth + 'px';
      image.style.maxHeight = preview.offsetHeight + 'px';

      preview.appendChild(image);
    });

    reader.readAsDataURL(file);
  }
}

getAvatar.addEventListener('change', () => {
  setImageFile(getAvatar, showAvatar);
});

getPhoto.addEventListener('change', () => {
  setImageFile(getPhoto, showPhoto);
});

export { clearPreviewImages };
