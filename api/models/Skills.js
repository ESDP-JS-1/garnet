const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const  SkillsSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'SkillCategory',
            required: true
        }
});

const  Skills = mongoose.model('Skills', SkillsSchema);

module.exports = Skills;