const http = require('http');
const fs = require('fs');
// Подключаем библиотеку драйвера
const MongoClient = require('mongodb').MongoClient;

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const sharedValue = fs.readFileSync('./shared/text.json');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World' + sharedValue);
});

// mongo connection URL
// Обратите внимание на хост - mongo
const url = 'mongodb://mongo:27017';

const dbName = 'docker-lesson';
const client = new MongoClient(url);

client.connect(function (err) {
  if (err) {
    console.error('Cant connect to MongoDB');
    throw err;
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Database: ', db);
  });
});
