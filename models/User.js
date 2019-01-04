const mongoose = require('mongoose');
//const Schema = mongoose.Schema; SAME THING AS LINE BELOW
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0}
});

mongoose.model('users', userSchema);