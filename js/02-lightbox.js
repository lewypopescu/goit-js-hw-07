import { galleryItems } from "./gallery-items.js";

const galleryStart = document.querySelector(".gallery");

function imagesCreate() {
  for (const image of galleryItems) {
    const imageMade = document.createElement("li");
    imageMade.classList.add("gallery__item");
    imageMade.innerHTML = `<a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>`;
    galleryStart.append(imageMade);
  }
  const lightBox = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionDelay: 250,
  });
}

imagesCreate();
