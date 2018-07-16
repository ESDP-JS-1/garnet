const express = require('express');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Companies = require('../models/Companies');

const createRouter = () => {
    const router = express.Router();

    router.post('/', [auth, permit('admin')], async (req, res) => {
        const category = new Companies(req.body);

        category.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    router.get('/', auth, (req, res) => {
        Companies.find()
            .then(categories => res.send(categories))
            .catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], (req, res) => {
        Companies.deleteOne({_id: req.params.id})
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    router.put('/:id', [auth, permit('admin')], async (req, res) => {
        const modifiedCompany = req.body;
        const company = await Companies.findOne({_id: req.params.id});

        for (let key in modifiedCompany) {
            company[key] = modifiedCompany[key];
        }

        company.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    return router;
};

module.exports = createRouter;