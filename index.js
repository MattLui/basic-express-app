const express = require('express');
const app = express();
const PORT = 3001;


app.use('/pp', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/pp', (req, res) => {
  res.send('Hello World!!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));