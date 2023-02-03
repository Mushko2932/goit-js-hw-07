import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Створення і рендер розмітки

const createGalleryImgMarkup = galleryImg => {
  const galleryMarkup = galleryImg
    .map(
      ({ original, preview, description }) =>
        `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
`
    )
    .join('');
  return galleryMarkup;
};

const insertGalleryImgMarkup = string => {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', string);
};

// console.log(createGalleryImgMarkup(galleryItems));

insertGalleryImgMarkup(createGalleryImgMarkup(galleryItems));

const galleryImgBox = document.querySelector('.gallery');

galleryImgBox.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  };

  // const selectedImg = e.target.title;
  // console.log(selectedImg);

  // Ініціалізація бібліотеки після створення і додання елементів галереї
  // Додаємо відображення підписів до зображень з атрибута alt

  let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'title',
    // captionPosition: 'bottom',
  });
};





