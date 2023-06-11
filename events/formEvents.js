import { createCard, getCards, updateCard } from '../api/cardsData';
import { showCards } from '../pages/cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-author')) {
      const payload = {
        card_title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
      };

      createCard(payload).then(({ vocab }) => {
        const patchPayload = { firebaseKey: vocab };

        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
    }
  });
};

export default formEvents;
