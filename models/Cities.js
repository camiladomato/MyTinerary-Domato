const mongoose = require ('mongoose')

const citySchema = new mongoose.Schema({
    city:{type: String, required: true},
    country:{type: String ,required: true},
    path:{type: String , required: true},
    info: {type: String , required: true} 
})

const City = mongoose.model('city',citySchema);

module.exports = City
