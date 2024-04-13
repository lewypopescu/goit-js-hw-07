import { galleryItems } from "./gallery-items.js";

const galleryStart = document.querySelector(".gallery");

function imagesCreate() {
  for (const image of galleryItems) {
    const imageMade = document.createElement("li");
    imageMade.classList.add("gallery__item");
    imageMade.innerHTML = `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
    galleryStart.append(imageMade);
  }
  const imageClick = galleryStart.querySelectorAll(".gallery__image");
  imageClick.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
      const instance = basicLightbox.create(
        `<img src="${image.dataset.source}" alt="${image.alt}">`
      );
      instance.show();
      document.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
      });
    });
  });
}

imagesCreate();
