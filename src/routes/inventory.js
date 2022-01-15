/**
 * All routes for inventory resource are defined here
 */

const express = require('express');
const router = express.Router();

// B-R-E-A-D
module.exports = function (db) {
  router.get('/', (req, res) => {
    const templateVar = db.data;
    res.render('index.ejs', templateVar);
  });
  return router;
};
