// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listGalleryRef = document.querySelector('.gallery');
const markupItem = madeMarkupGallery(galleryItems);

// listGalleryRef.innerHTML += markupItem;
listGalleryRef.insertAdjacentHTML('beforeend', markupItem);

const lightbox = new SimpleLightbox('.gallery__item a', {
  /* options */
  captionsData: 'alt',
  captionDelay: '250',
});

function madeMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title = 'sjdhfls'
          />
        </a>
      </li>`;
    })
    .join('');
}
