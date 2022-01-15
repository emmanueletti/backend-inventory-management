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
    const id = req.params.id;
    const requestedItem = db.getItem(id);
    if (!requestedItem.length) {
      return res.status(404).json({ error: 'item does not exist' });
    }
    return res.send(requestedItem[0]);
  });

  // Edit individual item
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;
    const editedItem = db.editItem(id, req.body);
    return res.send(editedItem);
  });

  // Add new item

  // Delete individual item
  return router;
};
