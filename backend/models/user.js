const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName :String,
    primaryEmail: { type: String, unique: true }, // avoid duplicates
}, { timestamps: true });

module.exports = mongoose.model('user',UserSchema)

