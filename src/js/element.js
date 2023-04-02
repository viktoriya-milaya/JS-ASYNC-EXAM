const createElement = (htmlElement, className1, className2) => {
  const element = document.createElement(htmlElement);
  element.classList.add(className1, className2);

  return element;
}


export default createElement;

