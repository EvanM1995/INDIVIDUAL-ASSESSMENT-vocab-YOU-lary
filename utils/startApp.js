import { getCards } from '../api/cardsData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showCards } from '../pages/cards';

const startApp = () => {
  getCards();
  domBuilder();
  navBar();
  logoutButton();
  formEvents();
  domEvents();

  getCards().then((cards) => showCards(cards));
};

export default startApp;
