const express = require('express');
const app = express();

const reqFilter =(reqobject, resobject, next) => {
    console.log('reqFilter');
    next();
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('Welcome to Simplilearn');
});

app.get('/home', (req, res) => {
    res.send('Welcome to Simplilearns home page');
});

app.listen(4000, () => {
    console.log('listening to port 4000');
});
