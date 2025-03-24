const express = require('express');
const path = require('path');
const server = express()

server.use(express.static(path.join('public')));

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

server.listen(8080, () => {
    console.log('Сервер запущен на порте 8080')
});