// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const express = require('express');
const path = require('path');
const app = express();
const port = 3333;

// DB query handler functions
const query = require('../database/queryHandlers.js');

app.use(express.json());

// serve index.html regardless of which listing ID is used in URL
app.get('/listing/:id', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// serve bundle file when index.html requests it
app.get('/public/bundle.js', (req, res) => {
  res.sendFile('bundle.js', {root: path.join(__dirname, '../public')});
});

// FETCH LISTING INFO BASED ON ID IN URL
app.get('/listing/:id/info', (req, res) => {
  query.getListingByID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// FETCH AMENITY INFO FOR LISTING BASED ON ID
app.get('/listing/:id/amenities', (req, res) => {
  query.getAmenitiesByListingID(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// FETCH FEATURED AMENITY INFO FOR LISTING BASED ON ID
app.get('/listing/:id/highlights', (req, res) => {
  query.getHighlightsByListingID(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Air Bee & Bee Server is Running at Port ${port}!`);
});
