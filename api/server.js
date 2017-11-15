const express = require('express');
const app = express();
const data = require('./MOCK_DATA.json');

app.get('/', (req, res) => res.sendFile('readme.md', {root: '.'}));

app.get('/getall', (req, res) => {
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
