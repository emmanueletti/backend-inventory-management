const path = require('path');

// Web server config
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('layout', path.join(__dirname, '../src/views/layouts'));
app.set('views', path.join(__dirname, '../src/views'));

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mockDb = require('./mockDb');

// Import routes
const inventoryRoutes = require('./routes/items');

// Mount routes
app.use('/items', inventoryRoutes(mockDb));

// Home route
app.get('/', (res, req) => {
  req.redirect('/inventory');
});

// Start server
app.listen(PORT, () => {
  console.log(`Inventory management API listening on port ${PORT}`);
});