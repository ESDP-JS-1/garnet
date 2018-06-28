const express = require('express');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Skills = require ('../models/Skills');

const createRouter = () => {
    const router = express.Router();

    router.post('/', [auth, permit('admin')], async (req, res) => {
        const skill = new Skills(req.body);

        skill.save()
            .then(skill => res.send(skill))
            .catch(error => res.status(400).send(error));
    });

    router.get('/', auth, (req, res) => {
        Skills.find()
            .then(skills => res.send(skills))
            .catch(() => res.sendStatus(500));
    });

    router.delete('/:id', [auth, permit('admin')], (req, res) => {
        Skills.deleteOne({_id: req.params.id})
            .then(skill => res.send(skill))
            .catch(error => res.status(400).send(error));
    });

    router.put('/:id', [auth, permit('admin')], async function (req, res) {
        try {
            const skill = await Skills.update({_id: req.params.id}, req.body, {multi: false}, function (err) {
                if (err) throw err
            });

            res.status(200).send(skill);
         } catch (err) {
            res.status(400).send({error: err})
        }
    });
    return router;

};
module.exports = createRouter;