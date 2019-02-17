//import * as express from 'express'
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors')

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{
            name: 'lilly'
        }, {
            name: 'lucy'
        }]
    });
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});


app.route('/api/dogs').post((req, res) => {
    res.send(201, req.body);
  });