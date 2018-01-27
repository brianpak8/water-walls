const water = require('../waterwall.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/water', (req, res) => {
  let heights = req.body.heights;
  res.json(water.waterwall(heights));
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})
