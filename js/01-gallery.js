import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Створення і рендер розмітки

const createGalleryItemsMarkup = galleryItems => {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `
<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
</div> 
`
    )
    .join('');
  return markup;
};

const insertGalleryItemsMarkup = string => {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', string);
};

// console.log(createGalleryItemsMarkup(galleryItems));

insertGalleryItemsMarkup(createGalleryItemsMarkup(galleryItems));

// Реалізація делегування на div.gallery

const galleryItemsContainer = document.querySelector('.gallery');

galleryItemsContainer.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  };
  // const imgEl = e.target;
  // const parentItem = imgEl.closest('.gallery__item');
  // parentItem.classList.add('.gallery__link');
  // console.log(e.target.nodeName);

  const selectedItem = e.target.getAttribute('data-source');

  // Підключення скрипту і стилів бібліотеки модального вікна

  const instance = basicLightbox.create(
    `
    <img src="${selectedItem}" width="800" height="600">
`,

    // Відкриття і закриття модального вікна по кліку на елементі галереї
    {
      onShow: () => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );

  instance.show();

  // Додавання закриття модального вікна після натискання клавіші Escape

  function closeModal(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
};







