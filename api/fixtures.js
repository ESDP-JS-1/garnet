const mongoose = require('mongoose');


const config = require('./config');
const User = require('./models/User');
const SkillCategory = require('./models/SkillCategory');
const Skills = require('./models/Skills');


mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;


db.once('open', async () => {
    try {
        await db.dropCollection('users');
        await db.dropCollection('skillcategories');
        await db.dropCollection('skills');
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

    const [hardSkill, softSkill] = await SkillCategory.create({
        text: 'Hard Skills'
    }, {
        text: 'Soft Skills'
    });

    const [programmingLanguage, communication] = await SkillCategory.create({
        text: 'Programming Languages',
        parentId: hardSkill._id
    }, {
        text: 'Communication',
        parentId: softSkill._id
    });

    const jsLanguage = await SkillCategory.create({
        text: 'Js language',
        parentId: programmingLanguage._id
    });

    await Skills.create({
        text: 'Communicative',
        categoryId: communication._id
    });

    await Skills.create({
        text: 'Js native',
        categoryId: jsLanguage._id
    },);



    db.close();
});
