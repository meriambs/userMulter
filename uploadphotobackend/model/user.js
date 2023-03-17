const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
      
    },
    photo:{
        type:String,
    },
    email:{
        type:String,
    }
})

 

module.exports = mongoose.model('userMulter',userSchema)