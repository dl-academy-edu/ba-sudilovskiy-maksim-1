'use strict';


function openPopup() {
  const btnOpen = document.querySelector('.banner__btn');
  const popup = document.querySelector('.popup-contacts');
  const bodyPopup = document.querySelector('.popup-contacts ');
  const bodyPage = document.querySelector('body');

  btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    bodyPage.style.overflow = 'hidden';
  });
  bodyPopup.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains('popup-btn-close') ||
      target.classList.contains('popup-contacts__body')
    ) {
      popup.classList.remove('active');
      bodyPage.style.overflow = '';
    }
  });
}


openPopup();

