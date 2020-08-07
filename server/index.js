const express = require('express');
const app = express();
const port = 3333;

const query = require('../database/queryHandlers.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Air Bee & Bee Server!');
});

app.get('/listings/:id/', (req, res) => {
  query.getListingByID(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get('/listings/:id/amenities', (req, res) => {
  // look up amenities by listing ID
});

app.get('/listings/:id/highlights', (req, res) => {
  // look up featured amenities (highlights) by listing ID
});

app.listen(port, () => {
  console.log(`Air Bee & Bee Server is Running at Port ${port}!`);
});
