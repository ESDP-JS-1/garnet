const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillCategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'SkillCategory'
    }
});


const SkillCategory = mongoose.model('SkillCategory', SkillCategorySchema);

module.exports = SkillCategory;
