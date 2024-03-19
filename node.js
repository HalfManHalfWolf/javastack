const express = require ('express');
const bodyParser = require ('body-parser');
const exphbs = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.engine('handlebars', exphbs());
app