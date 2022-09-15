//////////////////////////////
///// variables

const btnShare = document.querySelector(`.share-btn`);
const speechBubble = document.querySelector(`.share-popup`);

const authorContainer = document.querySelector(`.author-container`);
const authorInfo = document.querySelector(`.author-and-share`);

const mobileSharePopup = document.querySelector(`.mobile--share-popup`);

//////////////////////////////
///// function

const btnActive = function () {
  if (!speechBubble.classList.contains(`hidden`)) {
    btnShare.classList.add(`btn--active`);
    document.querySelector(`.share-icon`).classList.add(`btn-icon--active`);
  }
};

const btnInactive = function () {
  if (
    speechBubble.classList.contains(`hidden`) &&
    mobileSharePopup.classList.contains(`hidden`)
  ) {
    btnShare.classList.remove(`btn--active`);
    document.querySelector(`.share-icon`).classList.remove(`btn-icon--active`);
    document.querySelector(`.share-btn-container`).appendChild(btnShare)
  }
};

//////////////////////////////
///// event handlers

// share popup open when share button clicked
btnShare.addEventListener(`click`, function () {
  // Desktop
  if (window.screen.width > 608) {
    speechBubble.classList.remove(`hidden`);
    btnActive();
  } else if (window.screen.width <= 608) {
    // Mobile
    // hide author-and-share & show mobileSharePopup
    authorInfo.classList.add(`hideOpacity`);
    mobileSharePopup.classList.remove(`hidden`);
    mobileSharePopupBtnContainer.appendChild(btnShare)
    mobileSharePopup.style.height = `${authorContainer.height}`;
  }
});

// exit out of share popup if escape key pressed
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    if (!speechBubble.classList.contains(`hidden`)) {
      speechBubble.classList.add(`hidden`);
      btnInactive();
      btnShare.blur(); // remove focus when escape key pressed
    }

    // mobile
    if (!mobileSharePopup.classList.contains(`hidden`)) {
      mobileSharePopup.classList.add(`hidden`);
      authorInfo.classList.remove(`hideOpacity`);
      btnInactive();
      btnShare.blur();
    }
  }
});

// exit out of share popup if clicked outside
document.addEventListener(`click`, function (e) {
  if (!btnShare.contains(e.target) && !speechBubble.contains(e.target)) {
    speechBubble.classList.add(`hidden`);
    btnInactive();
  }

  // mobile
  if (!authorContainer.contains(e.target)) {
    mobileSharePopup.classList.add(`hidden`);
    authorInfo.classList.remove(`hideOpacity`);
    btnInactive();
  }
});
