import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add A Card!</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h7 class="card-definition">${item.definition}</h5>
        <p class="card-text bold">${item.favorite ? '<span class=\'badge badge-info sale-badge\'><i class=\'fa fa-check\' aria-hidden=\'true\'></i> Favorite</span>' : ''}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
        
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
