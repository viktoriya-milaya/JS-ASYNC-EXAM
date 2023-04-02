import createHtmlElement from './element';

const getDefinitionOfWord = ({ meanings }) => {

  const partList = document.getElementById('part-list');

  const createLiItem = (el) => {
    const html = `
      <p class="fst-italic text-secondary text-capitalize border-bottom ">${el.partOfSpeech}</p>
      <p class="pt-2"><span class="text-info">Synonyms:</span> ${el.synonyms.join(`, `)}</p>
      <p class="pt-2"><span class="text-info">Antonyms:</span> ${el.antonyms.join(`, `)}</p>
      `;

    const li = createHtmlElement(`li`, `part-of-speech-list__item`, 'pt-4');
    const ul = createHtmlElement(`ul`, `definition-list`, 'pt-2');


    const definitions = el.definitions;

    const createLiDefinition = (definitions) => {
      const liDefinition = createHtmlElement(`li`, `part-of-speech-list__item`, 'pt-1');
      liDefinition.innerText = definitions.definition;

      ul.append(liDefinition);

      return ul;

    };

    definitions.forEach(el => createLiDefinition(el));

    li.insertAdjacentHTML('afterbegin', html);

    partList.append(li);
    li.append(ul);

  };

  meanings.forEach(el => createLiItem(el));


};

export default getDefinitionOfWord;

