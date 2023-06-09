import { getCards } from '../api/cardsData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  formEvents(user);
  domEvents(user);
  navigationEvents(user);
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
