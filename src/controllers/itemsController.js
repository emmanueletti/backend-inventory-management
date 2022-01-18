/**
 * All logic for managing items resource defined here.
 * Controller responsible for getting data from models and pass on to the view
 */

module.exports = {
  _failedIdValidationMessage: { error: 'id must be a number' },
  _itemDoesNotExistMessage: { error: 'item does not exist' },
  _failedPriceValidationMessage: { error: 'price must be a number' },

  _validateNumber(value) {
    return !Number.isNaN(value);
  },

  handleBrowseAllItems(req, res, model) {
    const activeItems = model.getAllActiveItems();
    const deletedItems = model.getAllDeletedItems();
    const templateVars = { activeItems, deletedItems };
    res.render('itemsView.ejs', templateVars);
  },

  handleBrowseIndividualItem(req, res, model) {
    const id = Number(req.params.id);
    if (!this._validateNumber(id)) {
      return res.status(400).json(this._failedIdValidationMessage);
    }

    const requestedItem = model.getActiveItem(id);
    if (!requestedItem.length) {
      return res.status(404).json(this._itemDoesNotExistMessage);
    }

    return res.send(requestedItem[0]);
  },

  editInidividualItem(req, res, model) {
    const id = Number(req.params.id);
    if (!this._validateNumber(id)) {
      return res.status(400).json(this._failedIdValidationMessage);
    }

    const { name, price, description } = req.body;
    if (!this._validateNumber(Number(price))) {
      return res.status(400).json(this._failedPriceValidationMessage);
    }

    const editedItem = model.editItem(id, {
      name,
      description,
      price: Number(price),
    });
    return res.send(editedItem);
  },

  deleteIndividualItem(req, res, model) {
    const id = Number(req.params.id);
    if (!this._validateNumber(id)) {
      return res.status(400).json(this._failedIdValidationMessage);
    }

    model.deleteItem(id, req.body?.deleteNotes);
    return res.json({ message: `item with id ${id} is deleted` });
  },

  reactivateIndividualItem(req, res, model) {
    const id = Number(req.params.id);
    if (!this._validateNumber(id)) {
      return res.status(400).json(this._failedIdValidationMessage);
    }

    model.reactivateItem(id);
    return res.json({ message: `item with id ${id} is reactivated` });
  },

  createIndividualItem(req, res, model) {
    const { name, price, description } = req.body;
    if (!this._validateNumber(Number(price))) {
      return res.status(400).json(this._failedPriceValidationMessage);
    }

    const newlyCreatedItem = model.createNewItem({
      name,
      description,
      price: Number(price),
    });
    res.send(newlyCreatedItem);
  },
};
