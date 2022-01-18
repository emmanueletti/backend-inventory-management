/**
 * All logic for accessing and manipulating data defined here
 */
const data = require('../mockDatabase');

module.exports = {
  // Private
  _getAllItems() {
    return data;
  },

  _getItemIndex(id) {
    return this._getAllItems().findIndex((item) => item.id === id);
  },

  _getItem(id) {
    return this._getAllItems().filter((item) => item.id === id);
  },

  // Public
  getAllActiveItems() {
    return this._getAllItems().filter((item) => item.isActive);
  },

  getAllDeletedItems() {
    return this._getAllItems().filter((item) => !item.isActive);
  },

  getActiveItem(id) {
    return this.getAllActiveItems().filter((item) => item.id === id);
  },

  editItem(id, fieldsToUpdate) {
    const { name, price, description } = fieldsToUpdate;
    const itemToUpdate = this._getItem(id);
    const itemToUpdateIndex = this._getItemIndex(id);

    if (!itemToUpdate.length) return;

    const updatedItem = {
      id: itemToUpdate[0].id,
      name: name ?? itemToUpdate[0].name,
      price: price ?? itemToUpdate[0].price,
      description: description ?? itemToUpdate[0].description,
      isActive: itemToUpdate[0].isActive,
    };

    this._getAllItems().splice(itemToUpdateIndex, 1, updatedItem);
    return updatedItem;
  },

  createNewItem({ name, price, description }) {
    const dataRef = this._getAllItems();
    const lastItemsId = dataRef[dataRef.length - 1].id;
    const newItem = {
      id: lastItemsId + 1,
      name,
      price,
      description,
      isActive: true,
    };
    dataRef.push(newItem);
    return newItem;
  },

  deleteItem(id, deleteNotes) {
    const itemToDelete = this._getItem(id)[0];
    const itemToDeleteIndex = this._getItemIndex(id);
    const updatedItem = {
      ...itemToDelete,
      deleteNotes,
      isActive: false,
    };

    this._getAllItems().splice(itemToDeleteIndex, 1, updatedItem);
  },

  reactivateItem(id) {
    const itemToReactivate = this._getItem(id)[0];
    const itemToReactivateIndex = this._getItemIndex(id);
    const updatedItem = {
      ...itemToReactivate,
      deleteNotes: '',
      isActive: true,
    };

    this._getAllItems().splice(itemToReactivateIndex, 1, updatedItem);
  },
};
