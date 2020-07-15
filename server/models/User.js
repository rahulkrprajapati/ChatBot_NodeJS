const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required:'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    }
}, {timestamps: true});

userSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
},'Invalid e-mail');

const User = mongoose.model('User', userSchema)
module.exports = User