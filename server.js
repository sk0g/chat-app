const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const nocache = require('nocache');

const usersRoutes  = require('./routes/users');
const groupsRoutes = require('./routes/groups');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDB');
mongoose.Promise = global.Promise;


var www_folder = __dirname + '/www';
process.env.www_folder = www_folder;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(nocache());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        )
        return res.status(200).json({})
    };
    next();
});

app.use('/user', usersRoutes);
app.use('/group', groupsRoutes);

http.listen(3000);
console.log("\nServer now listening!\n");