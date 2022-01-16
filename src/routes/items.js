/**
 * All routes for inventory resource are defined here
 */

const express = require('express');
const router = express.Router();

// B-R-E-A-D
module.exports = function (db) {
  // Browse all
  router.get('/', (req, res) => {
    const data = db.getAll();
    const templateVar = { items: data };
    res.render('index.ejs', templateVar);
  });

  // Read individual item
  router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const requestedItem = db.getActiveItem(id);
    if (!requestedItem.length) {
      return res.status(404).json({ error: 'item does not exist' });
    }
    return res.send(requestedItem[0]);
  });

  // Edit individual item
  router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, price, description } = req.body;
    console.log(name, price, description);
    const editedItem = db.editItem(id, {
      name,
      description,
      price: Number(price) * 100,
    });
    return res.send(editedItem);
  });

  // Create new item
  router.post('/', (req, res) => {
    const { name, price, description } = req.body;
    const newlyCreatedItem = db.createNewItem({
      name,
      description,
      price: Number(price) * 100,
    });
    res.send(newlyCreatedItem);
  });

  // Delete individual item
  router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    db.deleteItem(id);
    return res.json({ message: `item with id ${id} is deleted` });
  });
  return router;
};
