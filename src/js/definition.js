
const getDefinitionOfWord = ({ word, phonetic, phonetics, meanings }) => {

  const src = phonetics[1].audio;
  const partList = document.getElementById('part-list');

  const htmlSearchWord = `
  <p><span class="text-capitalize px-1 fs-5 fw-bold text-primary">${word}</span>${phonetic}</p>
  <figure class="player pt-3 pb-3">
    <audio controls src="${src}">
      <a href="${src}">
      </a>
    </audio>
  </figure>
        `;
  

  const createLiItem = (el) => {
    const html = `
      <p class="fst-italic text-secondary text-capitalize border-bottom ">${el.partOfSpeech}</p>
      <p class="pt-2"><span class="text-info">Synonyms:</span> ${el.synonyms.join(`, `)}</p>
      <p class="pt-2"><span class="text-info">Antonyms:</span> ${el.antonyms.join(`, `)}</p>

              `;

    const li = document.createElement('li');
    li.classList.add('part-of-speech-list__item', 'pt-4');
    li.insertAdjacentHTML('afterbegin', html);


    const definitions = el.definitions;


    const ul = document.createElement('ul');
    ul.classList.add('definition-list');

    const createLiDefinition = (definitions) => {
      const liDefinition = document.createElement('li');
      liDefinition.classList.add('definition-list__item', 'pt-2');
      liDefinition.innerText = definitions.definition;

      ul.append(liDefinition);

    };

    definitions.forEach(el => createLiDefinition(el));
    
    partList.append(li);
    partList.append(ul);

  };

  meanings.forEach(el => createLiItem(el));

  const sectionSearchWord = document.querySelector('.search-word');
  sectionSearchWord.insertAdjacentHTML('afterbegin', htmlSearchWord);

};

export default getDefinitionOfWord;

