
const createElement = (htmlElement, className) => {
  const element = document.createElement(htmlElement);
  element.classList.add(className);

  return element;
};



const getDefinitionOfWord = ({ word, phonetic, phonetics, meanings }) => {

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

  const partList = document.getElementById('part-list');
  const htmlSearchContent = [];

  // const htmlSearchContent2 = `
  // <li class="part-of-speech-list__item pb-3">
  // <p class="fst-italic text-secondary border-bottom ">${partOfSpeech}</p>
  // <p class="text-info pt-2">Synonyms:${src || ''}</p>
  // <p class="text-info">Antonyms: ${src || ''}</p>
  // </li>
  // `;

  const createLiItem = (el) => {
    const html = `
      <p class="fst-italic text-secondary text-capitalize border-bottom ">${el.partOfSpeech}</p>
      <p class="text-info pt-2">Synonyms:${el.synonyms || ''}</p>
      <p class="text-info">Antonyms: ${el.antonyms || ''}</p>
              `;

    const li = document.createElement('li');
    li.classList.add('part-of-speech-list__item', 'pb-3');
    li.insertAdjacentHTML('afterbegin', html);

    console.log(li);

    partList.append(li);

  };

  meanings.forEach(el => createLiItem(el));



  // const html = `
  //   <p class="fst-italic text-secondary border-bottom ">${el.partOfSpeech}</p>
  //   <p class="text-info pt-2">Synonyms:${el.synonyms || ''}</p>
  //   <p class="text-info">Antonyms: ${el.antonyms || ''}</p>
  //           `;

  // const li = document.createElement(li);
  // li.classList.add('part-of-speech-list__item', 'pb-3');
  // li.insertAdjacentHTML('afterbegin', html);
  // htmlSearchContent.push(li);






  // htmlSearchContent.push(el);



  // meanings.forEach(el => {

  //   htmlSearchContent.push(el);

  // });

  // console.log(htmlSearchContent);


  //   <ul class="definition-list">
  //   <li class="definition-list__item pt-2">
  //     <p>${s || ''}</p>
  //   </li>
  //   <li class="definition-list__item pt-2">
  //     <p class="">Year; used to give the age of a person, usually a young one.</p>
  //   </li>
  //   <li class="definition-list__item pt-2">
  //     <p class="">Someone with light, pinkish skin that has a blue undertone, light hair and eyes, seen as best
  //       suited to certain colors of clothing.</p>
  //   </li>
  // </ul>


  const sectionSearchWord = document.querySelector('.search-word');
  const sectionSearchContent = document.querySelector('.search-content');

  // const partList = document.getElementById('part-list');



  sectionSearchWord.insertAdjacentHTML('afterbegin', htmlSearchWord);
  // sectionSearchContent.insertAdjacentHTML('afterbegin', htmlSearchContent2);

  partList.append(htmlSearchContent);


};

export default getDefinitionOfWord;

// const createPictureOfDay = ({ url, title, copyright, explanation, hdurl }) => {

//   const html = `
//     <main>
//     <div class="wrap">
//     <section class="header">
//       <h1 class="headding first-headding">Astronomy Picture of the Day</h1>
//     </section>
//     <section class="today__img">
//       <img src="${url}" alt="${title}" id="url-img">
//     </section>
//     <section class="today today__content">
//       <h2 class="headding second-headding" id="title">${title}</h2>
//       <p class="today__data">
//         <span class="brif" id="date">${getDate()}</span>
//         <span class="brif" id="copyright">${copyright ?? ` `}</span>
//       </p>
//       <p id="explanation">${explanation}</p>
//       <button class="button">
//       <a href="${hdurl}" target="_blank">View HD Img</a>
//       </button>
//   </section>
// </div>
// </main>
//         `;

//   const body = document.querySelector('body');

//   body.insertAdjacentHTML('afterbegin', html);

//   console.log(html);

// };

// export default createPictureOfDay;
