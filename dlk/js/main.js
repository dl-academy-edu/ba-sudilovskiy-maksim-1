'use strict';

function raitingActive() {
  const raitingBody = document.querySelector('.raiting__list');
  const raitingTxt = document.querySelector('.raiting__txt');

  raitingBody.addEventListener('click', (e) => {
    if (e.target.dataset.itemValue) {
      let numStars = e.target.dataset.itemValue;
      raitingBody.dataset.totalValue = numStars;
      raitingTxt.style.color = '#C29974';
    }
  });
}

function searchActive() {
  const searchBtn = document.querySelector('.search__btn');
  const searchInp = document.querySelector('.search__inp');
  const searchBody = document.querySelector('.header__search');
  searchBtn.addEventListener('click', (e) => {
    searchInp.classList.toggle('active');
    searchBody.classList.toggle('active');
  });
}


raitingActive();
searchActive();








