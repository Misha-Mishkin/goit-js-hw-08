import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const listGallery = createGallery(galleryItems);

galleryContainer.innerHTML = listGallery;


function createGallery(items) {
    return items.map(({ preview, original, description }) => `
<li>
  <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>
</li>`).join('');
    
}

let gallery = new SimpleLightbox('.gallery a',
         {
             navText: ['<', '>'],
             captionsData: 'alt',    
             captionPosition: 'bottom',
             captionDelay: 250,

         });
    
    console.log(gallery);