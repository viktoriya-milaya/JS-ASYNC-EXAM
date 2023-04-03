
const getWord = ({ word, phonetic, phonetics }) => {

  // audio only for american english
  
  const src = phonetics[1].audio;  

  const htmlSearchWord = `
  <p><span class="text-capitalize px-1 fs-5 fw-bold text-primary">${word}</span>${phonetic}</p>
        `;

  const htmlAudiohWord = `
  <figure class="player pt-3 pb-3">
  <audio controls src="${src}">
    <a href="${src}">
    </a>
  </audio>
</figure>
  `;

  const sectionSearchWord = document.querySelector('.search-word');
  sectionSearchWord.insertAdjacentHTML('afterbegin', htmlSearchWord);

  if (src) {
    sectionSearchWord.insertAdjacentHTML('beforeend', htmlAudiohWord);
  }
};


export default getWord;

