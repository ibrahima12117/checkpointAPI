const mongoose = require('mongoose')
// definition dun schemas de donne pour ppersone 

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favoriteFoods: [{
        type: String
    }]
})

module.exports = mongoose.model('Person', personSchema)