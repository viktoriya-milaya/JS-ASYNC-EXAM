import loaderImg from '../assets/loader.svg';

export const createLoader = () => {
    const loader = document.createElement('img');
    loader.setAttribute('src', loaderImg);
    loader.classList.add(`fade-in`, `center`);

    document.body.append(loader);
};

export const removeLoader = () => new Promise((resolve) => {
    const loader = document.querySelector('.center');
    loader.classList.remove('fade-in');
    loader.classList.add('fade-out');
    loader.addEventListener('animationend', () => {
        loader.remove();
        resolve();
    });
});