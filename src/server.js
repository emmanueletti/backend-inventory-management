const path = require('path');

// Web server config
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './public')));

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const itemsRoutes = require('./routes/itemsRoutes');

// Mount routes
app.use('/items', itemsRoutes());

// Home route
app.get('/', (res, req) => {
  req.redirect('/items');
});

// Start server
app.listen(PORT, () => {
  console.log(`Inventory management API listening on port ${PORT}`);
});
