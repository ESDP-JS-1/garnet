const mongoose = require('mongoose');


const config = require('./config');
const User = require('./models/User');



mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;




db.once('open', async () => {
    try {
        await db.dropCollection('users');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    const user = [];

    for (let i = 0; i < 4; i++) {

        user[i] = await User.create({
            username: 'user' + i,
            password: 'user',
            role: 'employee',
            photo: '1.png'
        });
    }
    await User.create({
        username: 'admin',
        password: 'admin',
        role: 'admin',
        photo: '1.png'

    });
    db.close();
});
