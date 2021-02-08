/* NOTE: Global Variables */
const modalButton = document.querySelector('.button');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalOverlay = document.querySelector('.modal-overlay');
const wavingHand = document.querySelector('.wave-hand');
const modal = document.querySelector('.modal');

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

// Focus on the button and input elements.
const trapFocus = event => {
  const focusables = modal.querySelectorAll('input, button');
  const firstFocusable = focusables[0];
  const lastFocusable = focusables[focusables.length - 1];

  // Returns focus to the first focusable element
  if (
    document.activeElement === lastFocusable &&
    event.key === 'Tab' &&
    !event.shiftKey
  ) {
    event.preventDefault();
    firstFocusable.focus();
  }
  // Directs focus back to the last focusable element
  if (
    document.activeElement === firstFocusable &&
    event.key === 'Tab' &&
    event.shiftKey
  ) {
    event.preventDefault();
    lastFocusable.focus();
  }
};

// Open Modal
const openModal = _ => {
  document.body.classList.add('modal-is-open');
  wave(wavingHand);

  const input = modal.querySelector('input');
  // Focus on input
  input.focus();

  // Add Trap Focus
  document.addEventListener('keydown', trapFocus);
};

// Close Modal
const closeModal = _ => {
  document.body.classList.remove('modal-is-open');
  modalButton.focus();

  // Remove Trap Focus
  document.removeEventListener('keydown', trapFocus);
};

// Checks if modal is open
const isModalOpen = _ => {
  return document.body.classList.contains('modal-is-open');
};

/* NOTE: Event Listeners */

modalButton.addEventListener('click', event => {
  openModal();
});

modalCloseButton.addEventListener('click', event => {
  closeModal();
});

// Close the modal when clicked outside the modal
modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    closeModal();
  }
});

// Close the modal with the Escape Key
document.addEventListener('keydown', event => {
  if (isModalOpen() && event.key === 'Escape') {
    closeModal();
  }
});
