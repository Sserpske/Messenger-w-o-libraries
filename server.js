const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('./'));

app.listen(PORT, function () {
  console.log(`Сервер запущен на порту ${PORT}!`);
});

