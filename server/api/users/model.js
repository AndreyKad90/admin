import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login:  String,
    password: String
});

var User = mongoose.model('User', userSchema);

export {User};