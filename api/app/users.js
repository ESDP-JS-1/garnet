const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

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

  router.post('/create', [auth, permit('admin')], async (req, res) => {
    try {
      const user = await new User(req.body);

      if (!user) {
        return res.status(400).send({error: 'Server problems'});
      }

      res.send(user);
    } catch (err) {
      return res.status(400).send({error: err});
    }
  });

  router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).send({error: 'User not found'});
    }

    res.send(user);
  });

  router.put('/', auth, async (req, res) => {
    try {
      if (req.user._id !== req.body.id) {
        if (!req.user.role.includes('admin')) return res.status(400).send({error: 'permit deny'});
      } else if (!req.user.role.includes('admin')) {
        delete req.body.role;
      }
      const user = await User.update({_id: req.body.id}, req.body, {multi: false}, function (err) {
        if (err) throw err
      });

      res.status(200).send({user});
    } catch (e) {
      res.status(400).send({error: e})
    }
  });

  router.get('/user-list',[auth,permit('admin')], async (req, res) => {
    // const limit = req.query('limit') || 20;
    // const skip = req.query('skip') || 0;
    const user_list = await User.find();//.limit(limit).skip(skip);

    if (!user_list) {
      return res.status(400).send({error: 'User list not found'});
    }
      res.send({user_list})//, limit, skip});
  });

  router.delete('/', [auth, permit('admin')], async (req, res) => {
    const deleted_user = await User.remove({_id: req.body.id});

    if (!deleted_user) return res.status(400).send({error: 'User not found'});

    res.send(deleted_user);
  });

  return router;
};

module.exports = createRouter;
