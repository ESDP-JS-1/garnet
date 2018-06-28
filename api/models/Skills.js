const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const  SkillsSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: 'Skills'
        }
});

const  Skills = mongoose.model('Skills', SkillsSchema);

module.exports = Skills;