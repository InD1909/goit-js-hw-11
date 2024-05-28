import { imageTemplate, imagesTemplate } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function searchImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '37050490-6d3dacd6192465869ce2cc708',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(res => res.json())
    .catch(function (error) {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    });
}

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  searchImage(query).then(data => {
    const markup = imagesTemplate(data.hits);
    imagesList.innerHTML = markup;
    if (markup.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
  });
});

import { formElem, imagesList } from '../main';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a');
lightbox.refresh();
