
const getWord = ({ word, phonetic, phonetics }) => {

  const src = phonetics[1].audio;

  const htmlSearchWord = `
  <p><span class="text-capitalize px-1 fs-5 fw-bold text-primary">${word}</span>${phonetic}</p>
  <figure class="player pt-3 pb-3">
    <audio controls src="${src}">
      <a href="${src}">
      </a>
    </audio>
  </figure>
        `;

  const sectionSearchWord = document.querySelector('.search-word');
  sectionSearchWord.insertAdjacentHTML('afterbegin', htmlSearchWord);

};


export default getWord;

