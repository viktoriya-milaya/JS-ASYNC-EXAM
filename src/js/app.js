
import getInputValue from './input';
import createError404 from './error404';

const inputSearch = document.getElementById('input');


document.addEventListener('DOMContentLoaded', () => {
  try {
      inputSearch.addEventListener('input', getInputValue);

    inputSearch.addEventListener('keydown', (e) => {
      if (e.key === 13) {
        e.preventDefault();
      }
    }
    );

  }

  catch {
    createError404();
  }
});
