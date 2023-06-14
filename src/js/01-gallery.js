// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.esm';
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
console.log(galleryItems);
