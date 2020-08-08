// ----------------------- //
// ----------------------- //
// ---- AIR BEE & BEE ---- //
// ----------------------- //
// ----------------------- //

const express = require('express');
const app = express();
const port = 3333;

// DB query handler functions
const query = require('../database/queryHandlers.js');

app.use(express.json());

// FETCH LISTING INFO BASED ON ID IN URL
app.get('/listings/:id/', (req, res) => {
  query.getListingByID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// FETCH AMENITY INFO FOR LISTING BASED ON ID
app.get('/listings/:id/amenities', (req, res) => {
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
app.get('/listings/:id/highlights', (req, res) => {
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
