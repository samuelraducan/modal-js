/* NOTE: Global Variables */
const modalButton = document.querySelector('.button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalOverlay = document.querySelector('.modal-overlay');
const wavingHand = document.querySelector('.wave-hand');

/* NOTE: Functions */
const wave = hand => {
  const tl = new TimelineMax({});
  tl.set(hand, { transformOrigin: 'bottom center' });
  tl.from(hand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5),
  });
  tl.to(hand, 0.2, { rotation: 15 });
  tl.to(hand, 0.2, { rotation: -15 });
  tl.to(hand, 0.2, { rotation: 15 });
  tl.to(hand, 0.2, { rotation: -15 });
  tl.to(hand, 0.2, { rotation: 0 });
};

/* NOTE: Event Listeners */

// Open the modal
modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open');
  wave(wavingHand);
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
