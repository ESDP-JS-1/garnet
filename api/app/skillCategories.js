const express = require('express');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const SkillCategory = require('../models/SkillCategory');

const createRouter = () => {
    const router = express.Router();

    router.post('/', [auth, permit('admin')], async (req, res) => {
        const category = new SkillCategory(req.body);

        category.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    router.get('/', auth, (req, res) => {
        SkillCategory.find()
            .then(categories => res.send(categories))
            .catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], (req, res) => {
        SkillCategory.deleteOne({_id: req.params.id})
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    router.put('/:id', [auth, permit('admin')], async (req, res) => {
        const modifiedCategory = req.body;
        const category = await SkillCategory.findOne({_id: req.params.id});

        for (let key in modifiedCategory) {
            category[key] = modifiedCategory[key];
        }

        category.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    return router;
};

module.exports = createRouter;