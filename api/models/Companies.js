const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    friendly:{
        type: Boolean,
        default: false,
        enum: [false, true]
    },
    country:{
        type: String,
        required: true
    }
});


const SkillCategory = mongoose.model('Companies', CompaniesSchema);

module.exports = SkillCategory;
