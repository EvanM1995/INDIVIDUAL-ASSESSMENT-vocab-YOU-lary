import {
  cssCards, getCards, htmlCards, javascriptCards, pythonCards
} from '../api/cardsData';
import { showCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#All').addEventListener('click', () => {
    getCards(user.uid).then(showCards);
  });

  document.querySelector('#Python').addEventListener('click', () => {
    pythonCards(user.uid).then(showCards);
  });

  document.querySelector('#Javascript').addEventListener('click', () => {
    javascriptCards(user.uid).then(showCards);
  });

  document.querySelector('#CSS').addEventListener('click', () => {
    cssCards(user.uid).then(showCards);
  });

  document.querySelector('#HTML').addEventListener('click', () => {
    htmlCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
