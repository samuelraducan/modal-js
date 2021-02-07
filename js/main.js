/* NOTE: Global Variables */
const modalButton = document.querySelector('.jsModalButton');
const modalCloseButton = document.querySelector('.jsModalClose');

/* NOTE: Event Listeners */
modalButton.addEventListener('click', event => {
  console.log('Button was clicked.');
  document.body.classList.add('modal-is-open');
});

modalCloseButton.addEventListener('click', event => {
  console.log('You pressed the icon x');
  document.body.classList.remove('modal-is-open');
});
