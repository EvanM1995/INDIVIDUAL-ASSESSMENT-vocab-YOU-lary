import { createCard, getCards, updateCard } from '../api/cardsData';
import { showCards } from '../pages/cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-author')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        catagory: document.querySelector('#catagory').value,
        time: document.querySelector('#time').value,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

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
        catagory: document.querySelector('#catagory').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards().then(showCards);
      });
    }
  });
};

export default formEvents;
