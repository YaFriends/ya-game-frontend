const { app } = require('./dist/server.js');

const DEFAULT_PORT = '8000';
const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
