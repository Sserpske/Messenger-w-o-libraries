const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('./static'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, function () {
  console.log(`Сервер запущен на порту ${PORT}!`);
});
