/**
 * All routes for inventory resource are defined here
 */

const express = require('express');
const router = express.Router();

// B-R-E-A-D
module.exports = function (db) {
  // Browse all
  router.get('/', (req, res) => {
    const { data } = db;
    const templateVar = { items: data };
    res.render('index.ejs', templateVar);
  });

  // Read individual item
  router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const requestedItem = db.getItem(id);
    if (!requestedItem.length) {
      return res.status(404).json({ error: 'item does not exist' });
    }
    return res.send(requestedItem[0]);
  });

  // Edit individual item
  router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const editedItem = db.editItem(id, req.body);
    return res.send(editedItem);
  });

  // Create new item
  router.post('/', (req, res) => {
    const newlyCreatedItem = db.createNewItem(req.body);
    res.send(newlyCreatedItem);
  });

  // Delete individual item
  router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    db.deleteItem(id);
    return res.send('ok');
  });
  return router;
};
