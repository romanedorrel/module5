const express = require('express');
const app = express();
const port = 2000;
const port1 = 2001;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})