const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    urlImage:{type: String, required: true},
    country:{type:String,required:true},
    googleUser: {type: Boolean} 
})

const User = mongoose.model('user',userSchema);

module.exports = User