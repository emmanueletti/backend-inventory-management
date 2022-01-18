/**
 * All routing logic for items resource are defined here
 */

const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const itemsModel = require('../models/itemsModel');

module.exports = function () {
  // Browse all
  router.get('/', (req, res) => {
    return itemsController.handleBrowseAllItems(req, res, itemsModel);
  });

  // Read individual item
  router.get('/:id', (req, res) => {
    return itemsController.handleBrowseIndividualItem(req, res, itemsModel);
  });

  // Edit individual item
  router.put('/:id', (req, res) => {
    return itemsController.editInidividualItem(req, res, itemsModel);
  });

  // Delete individual item
  router.delete('/:id', (req, res) => {
    return itemsController.deleteIndividualItem(req, res, itemsModel);
  });

  // Re-active individual item
  router.put('/:id/reactivate', (req, res) => {
    return itemsController.reactivateIndividualItem(req, res, itemsModel);
  });

  // Create new item
  router.post('/', (req, res) => {
    return itemsController.createIndividualItem(req, res, itemsModel);
  });

  return router;
};
