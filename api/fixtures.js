const mongoose = require('mongoose');


const config = require('./config');
const User = require('./models/User');
const SkillCategory = require('./models/SkillCategory');
const Skills = require('./models/Skills');
const Companies = require('./models/Companies');
const companies_list = require('./companies-list');


mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;


db.once('open', async () => {
    try {
        await db.dropCollection('users');
        await db.dropCollection('skillcategories');
        await db.dropCollection('skills');
        await db.dropCollection('companies');
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
        title: 'Hard Skills',
        parentId: null
    }, {
        title: 'Soft Skills',
        parentId: null
    });

    const [programmingLanguage, communication] = await SkillCategory.create({
        title: 'Programming Languages',
        parentId: hardSkill._id
    }, {
        title: 'Communication',
        parentId: softSkill._id
    });

    const jsLanguage = await SkillCategory.create({
        title: 'Js language',
        parentId: programmingLanguage._id
    });

    await Skills.create({
        title: 'Communicative',
        parentId: communication._id
    });

    await Skills.create({
        title: 'Js native',
        parentId: jsLanguage._id
    });


    for (let i = 0; i < companies_list.length; i++) {

        await Companies.create(companies_list[i])
    }


    db.close();
});
