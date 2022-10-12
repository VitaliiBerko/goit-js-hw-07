import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkUp = createPhotoCartMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createPhotoCartMarkup() {
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

function onGalleryContainerClick(event) {
    event.preventDefault();

    const isPhotoCardEl = event.target.classList.contains('gallery__image');

    if(!isPhotoCardEl) {
        return;
  }

  // openBigPhoto();
   const instance = basicLightbox.create(`
 <img src="${event.target.dataset.source}">
  `);
instance.show()

  
  window.addEventListener('keydown', 
  // onEscClose)
  
  event => {
    if (event.code === 'Escape') {
      instance.close();      
    }

    console.log(event.target.code);
  });
       
};



// function openBigPhoto () { 
//   const instance = basicLightbox.create(`
// <img src="${event.target.dataset.source}">
// `);
// instance.show()
// };


// function onEscClose() { 
//  openBigPhoto;
//   if (event.code === 'Escape') {
//       instance.close();      
//     }
// };





