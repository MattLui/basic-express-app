const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pp', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));