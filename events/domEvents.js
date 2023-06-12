import { deleteCard, getCards, getSingleCard } from '../api/cardsData';
import addCardForm from '../components/addCardForm';
import { showCards } from '../pages/cards';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-author-btn')) {
      addCardForm(user.uid);
    }

    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('You really wanna do that?')) {
        console.warn('CLICKED DELETE', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards(user.uid).then(showCards);
        });
      }
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
  });
};

export default domEvents;
