
import error404Img from '../assets/error404.jpg';
import createHtmlElement from './element';


const createError404 = () => {
    const img404 = createHtmlElement(`img`, `fade-in`, 'err404');
    img404.setAttribute('src', error404Img);

    document.body.append(img404);
};

export default createError404;