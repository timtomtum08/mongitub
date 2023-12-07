const express = require('express');

const {welcomeMessage, welcomeMessageFunction, testEjsView} = require('./controllers/welcome');
const {displayQcms, displayFormQcm, createNewForm} = require('./controllers/qcms');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const port = 3000;



app.get('/', welcomeMessage);

app.get('/welcome2', welcomeMessageFunction);

app.get('/testejs', testEjsView);

app.get('/qcms', displayQcms);

app.get('/qcms/new', displayFormQcm); //handler

app.post('/qcms/new', createNewForm);

app.listen(port, () => {
    console.log(`Ecoute uniquement sur http://localhost:${port}`);
});