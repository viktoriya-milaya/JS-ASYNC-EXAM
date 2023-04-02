const showError = ({ message }) => {
  const errorSearch = document.getElementById('error');
  errorSearch.classList.toggle('d-none');
  errorSearch.innerText = message;

  setTimeout(() => {
    errorSearch.classList.toggle('d-none');
  }, 3000 );

 };

export default showError;