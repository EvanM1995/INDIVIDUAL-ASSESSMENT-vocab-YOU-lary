import addCardForm from '../components/addCardForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-author-btn')) {
      addCardForm();
    }
  });
};

export default domEvents;
