const express = require('express');
const User = require('../models/User');

const createRouter = () => {
    const router = express.Router();


    router.post('/', async (req, res) => {

        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(400).send({error: 'Username not found'});
        }

        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            return res.status(400).send({error: 'Password is wrong!'});
        }

        user.generateToken();
        await user.save();

        return res.send({message: 'User and password correct!', user});
    });



    return router;
};

module.exports = createRouter;
