const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

const users = require('./app/users');
const skillCategories = require('./app/skillCategories');
const skills = require('./app/skills');
const companies = require('./app/companies');


const port =process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongoose connected!');

    app.use('/users', users());
    app.use('/skill-categories', skillCategories());
    app.use('/skills', skills());
    app.use('/companies', companies());


    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
});
