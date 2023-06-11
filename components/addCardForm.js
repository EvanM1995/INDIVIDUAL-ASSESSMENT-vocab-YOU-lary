import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="definition" value="${obj.definition || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Add Card</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
