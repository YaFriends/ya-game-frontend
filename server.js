const express = require('express');
const path = require('path');
const app = express();
const DEFAULT_PORT = 3000;

const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = Number(PORT) === DEFAULT_PORT ? 'localhost' : '0.0.0.0';

app.use(express.static(path.join(__dirname, '/dist/')));

app.listen(PORT, HOST);
