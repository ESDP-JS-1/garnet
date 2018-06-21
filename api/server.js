const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

const users = require('./app/users');


const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongoose connected!');

    app.use('/users', users());


    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
});
