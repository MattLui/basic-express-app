const express = require('express');
const app = express();
const PORT = 3001;

const path = require("path")

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pp', (req, res) => {
  res.send('Hello World!!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));