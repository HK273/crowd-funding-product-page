// =====LINKS=========== //
// Modal: https://codepen.io/kevinpowell/pen/KKyOYvM
// modal: https://www.youtube.com/watch?v=TAB_v6yBXIE
// Modal: https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript
// Modal: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close
// Place holder for numbers: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_number_placeholder

// selectors / variables for mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

// Mobile Menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Modal One
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelectorAll(".close");
const selectReward = document.querySelectorAll(".btn-two");
const contBtn = document.querySelectorAll(".continue");

// Open modal
openModal.addEventListener("click", () => {
  modal.showModal();
});

// Close modal & modalTwo from X
closeModal.forEach((element) => {
  element.addEventListener("click", () => {
    modal.close();
    modalTwo.close();
  });
});

// open modal from Select Reward
selectReward.forEach((element) => {
  element.addEventListener("click", () => {
    modal.showModal();
  });
});

// close modal from continue button
contBtn.forEach((element) => {
  element.addEventListener("click", () => {
    modal.close();
  });
});

// Modal Two - Thanks!
const modalTwo = document.querySelector(".modal-two");

// Open modal from continue button
contBtn.forEach((element) => {
  element.addEventListener("click", () => {
    modalTwo.showModal();
  });
});

// Close modal & modalTwo from Got it! button
const gotBtn = document.querySelector(".got-it");
gotBtn.addEventListener("click", () => {
  modal.close();
  modalTwo.close();
});

// Show pledge confirmation on radio button
// Bit of duplication here, probably a more effecient way to do this
const inputOne = document.querySelector(".input-one");
const pledgeOne = document.querySelector(".pledge-one");

const inputTwo = document.querySelector(".input-two");
const pledgeTwo = document.querySelector(".pledge-two");

const inputThree = document.querySelector(".input-three");
const pledgeThree = document.querySelector(".pledge-three");

inputOne.addEventListener("click", () => {
  pledgeOne.classList.toggle("active");
});

inputTwo.addEventListener("click", () => {
  pledgeTwo.classList.toggle("active");
});

inputThree.addEventListener("click", () => {
  pledgeThree.classList.toggle("active");
});

// ========================================== //

// Testing Stuff

// input.forEach((element) => {
//   element.addEventListener("click", () => {
//     pledge.classList.toggle("active");
//   });
// });

// close modal from anywhere
// not so great with the radio buttons :/
// modal.addEventListener("click", () => {
//   modal.close();
// });

// ========================================== //
