
import getApiData from './api';
import createError404 from './error404';

document.addEventListener('DOMContentLoaded', () => {
  try {
    getApiData();
  }
  catch {
    createError404();
  }
});
