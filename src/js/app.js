
import getInputValue from './input';
import createError404 from './error404';

const inputSearch = document.getElementById('input');
const form = document.getElementById('search');



document.addEventListener('DOMContentLoaded', () => {

  form.addEventListener('submit', e => e.preventDefault());

  try {
    inputSearch.addEventListener('input', getInputValue);
  }
  catch {
    createError404();
  }
});
