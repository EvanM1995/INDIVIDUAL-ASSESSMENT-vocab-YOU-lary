import { getCards, pythonCards } from '../api/cardsData';
import { showCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#All').addEventListener('click', () => {
    getCards().then(showCards);
  });

  document.querySelector('#Python').addEventListener('click', () => {
    pythonCards().then(showCards);
  });
};

export default navigationEvents;
