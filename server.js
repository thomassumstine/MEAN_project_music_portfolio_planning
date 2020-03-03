const path = require('path');
const express = require('express');

const app = express();

app.use(express.json()); // enables json to be received
// to parse form data, req.body will be undefined without
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/dist/public')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (request, response) => {
  response.sendFile(path.join(__dirname, '/public/dist/public/index.html'));
});


app.listen(3000, () => console.log('listening on port 3000'));