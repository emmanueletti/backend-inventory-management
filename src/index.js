// Web server config
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

/* MIDDLE WARE */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes

// Mount routes

// Start server
app.listen(PORT, () => {
  console.log(`Find Shelter API listening on port ${PORT}`);
});
