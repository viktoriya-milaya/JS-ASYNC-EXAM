
import { createLoader, removeLoader } from './loader';
import getDefinitionOfWord from './definition';

const errorSearch = document.getElementById('error');


async function getApiData() {

  createLoader();

  const getData = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/summer");
  const getDataJson = await getData.json();
  await removeLoader();

  if (!getDataJson[0]) {
    errorSearch.classList.toggle('d-none');
  }
  console.log(getDataJson)
  getDataJson.forEach(el => getDefinitionOfWord(el));

  // getDefinitionOfWord(getDataJson[0]);

};

export default getApiData;
