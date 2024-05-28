// import { lightbox } from '../main';

function imageTemplate(image) {
  return ` <li>
            <a href="${image.largeImageURL}" class="gallery-item">
              <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
              <p>Downloads: ${image.downloads}</p>
            </div>
          </li>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export { imageTemplate, imagesTemplate };

import { imagesList } from '../main';
