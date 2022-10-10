import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const cardsMarkUp = createPhotoCartMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', cardsMarkUp);

galleryConteiner.addEventListener('click', onPaletContainerClick);

function createPhotoCartMarkup(photos) {
    return galleryItems.map( ({preview, original, description}) => {
        return ` <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('');     
}

function onPaletContainerClick(event) {
    event.preventDefault();

    const isPhotoCardEl = event.target.classList.contains('gallery__image');

    if(!isPhotoCardEl) {
        return;
    }

    // console.log(event.target.dataset.source);
    
   const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

instance.show()
   
}




