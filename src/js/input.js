
import getApiData from './api';
import debounsRequest from './debouns';
import { createLoader, removeLoader } from './loader';

const TIME = 500;
const EMPTY = ' ';

function getInputValue(e) {
  const word = e.target.value;

  if (word === ``) {
    document.querySelector('.search-word').innerHTML = ``;
    document.getElementById('part-list').innerHTML = ``;
    return;
  }

  if (word === EMPTY) {
    return;
    
  };

  getApiData(word);
};

getInputValue = debounsRequest(getInputValue, TIME);

export default getInputValue;
