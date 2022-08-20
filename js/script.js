const btnShare = document.querySelector(`.share-btn`);
const speechBubble = document.querySelector(`.share-popup`);

const mobileBtnShare = document.querySelector(`.mobile--share-btn`);
const mobileSharePopup = document.querySelector(`.mobile--share-popup`);

// btnShare.addEventListener(`click`, function () {
//   speechBubble.classList.toggle(`hidden`);
// });

btnShare.addEventListener(`click`, function () {
  if (window.screen.width > 608) {
    speechBubble.classList.toggle(`hidden`);
  } else if (window.screen.width <= 608) {
    mobileSharePopup.classList.remove(`hidden`);
  }
});

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !speechBubble.classList.contains(`hidden`)) {
    speechBubble.classList.add(`hidden`);
    btnShare.blur();
  }
});

document.addEventListener(`click`, function (e) {
  if (!btnShare.contains(e.target) && !speechBubble.contains(e.target)) {
    speechBubble.classList.add(`hidden`);
  }
});

// mobile
mobileBtnShare.addEventListener(`click`, function () {
  mobileSharePopup.classList.toggle(`hidden`);
});

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !mobileSharePopup.classList.contains(`hidden`)) {
    mobileSharePopup.classList.add(`hidden`);
    btnShare.blur();
  }
});

document.addEventListener(`click`, function (e) {
  if (!btnShare.contains(e.target) && !mobileSharePopup.contains(e.target)) {
    mobileSharePopup.classList.add(`hidden`);
  }
});
