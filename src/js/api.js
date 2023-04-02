
import { createLoader, removeLoader } from './loader';
import getWord from './word';
import getDefinitionOfWord from './definition';
import showError from './error';

async function getApiData(word) {
  createLoader();
  const getData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const getDataJson = await getData.json();
  await removeLoader();
  try {
    getWord(getDataJson[0]);
    getDataJson.forEach(el => getDefinitionOfWord(el));
  }
  catch {
    showError(getDataJson);
  }
};

export default getApiData;
