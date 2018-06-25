const User = require('../models/User');
const auth = (req, res, next) => {
    const token = req.get('Token');
    if (!token) {
        return next();
    }
    User.findOne({token: token}).then(user => {
        if (!user) {
            return next();
        }

        req.user = user;
        next();
    });

};

module.exports = auth;

