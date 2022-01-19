const express = require('express');
const path = require('path');
const app = express();
const DEFAULT_PORT = '8000';

const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/mockServiceWorker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/mockServiceWorker.js'));
});

app.use('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(PORT, HOST);
