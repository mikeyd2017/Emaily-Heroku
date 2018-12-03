const mongoose = require('mongoose');
//const Schema = mongoose.Schema; SAME THING AS LINE BELOW
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);