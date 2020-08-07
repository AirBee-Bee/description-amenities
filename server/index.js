const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send('Hello from Air Bee & Bee Server!');
});

app.listen(port, () => {
  console.log(`Air Bee & Bee Server is Running at Port ${port}!`);
});
