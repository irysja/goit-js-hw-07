import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');
function renderGalleryItems() {
      let galleryHTML = '';
      for (let i = 0; i < galleryItems.length; i++) {
        const { preview, original, description } = galleryItems[i];
        galleryHTML += `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>

        `;
      }
      gallery.innerHTML = galleryHTML;
    }

    renderGalleryItems();

    gallery.addEventListener('click', function (event) {
    event.preventDefault();
    
    
    const target = event.target;
    if (target.nodeName === 'IMG') {
      const imageUrl = target.parentNode.href;
      const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    instance.show()

    }
  });

console.log(galleryItems);
