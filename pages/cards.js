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
      <h7 class="card-definition">${item.definition}</h7>
      <h5 class="card-catagory">${item.catagory}</h5>
      <h5 class="card-time">${item.time}</h5>
      <button type="button" class="btn btn-outline-secondary" id="update-author--${item.firebaseKey}">Edit</button>
      <button type="button" class="btn btn-outline-secondary" id="delete-author-btn--${item.firebaseKey}">Delete</button>
        
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
