import { createCard, getCards, updateCard } from '../api/cardsData';
import { showCards } from '../pages/cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-author')) {
      const payload = {
        card_title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        // catagory: document.querySelector('#catagory').value,
        time: document.querySelector('#time').value,
      };

      createCard(payload).then(({ vocab }) => {
        const patchPayload = { firebaseKey: vocab };

        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        time: document.querySelector('#time').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards().then(showCards);
      });
    }
  });
};

export default formEvents;
