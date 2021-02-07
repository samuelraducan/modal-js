/* NOTE: Global Variables */
const modalButton = document.querySelector('.button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

/* NOTE: Event Listeners */

// Open the modal
modalButton.addEventListener('click', event => {
  console.log('Button was clicked.');
  document.body.classList.add('modal-is-open');
});

// Close the modal
modalCloseButton.addEventListener('click', event => {
  console.log('You pressed the icon x');
  document.body.classList.remove('modal-is-open');
});

// Close the modal when clicked outside the modal
modalOverlay.addEventListener('click', event => {
  console.log(event.target);
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open');
  }
});
