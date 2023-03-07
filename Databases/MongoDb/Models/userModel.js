const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const { ObjectId } = mongoose.Schema;


const userSchema = new mongoose.Schema({
    email:
    {
      type: String,
      required: true, 
      index: true,
      unique: true,
    },
    name: 
    {
      type: String,
      required: true,
    },
    passwordHash: 
    {
      type: String,
    },
    role:
    {
      type: String,
      required: true ,
      default:"subscriber",
    },
    avatarImage:
    {
      hasAvatar:{type:Boolean ,default:false},
      image:{type: String,default: ''}
    },
    History:
    [
        {
            type: ObjectId,
            ref:'Conversation',
        }
    ]
},{timestamps: true});



userSchema.plugin(uniqueValidator)




const userModel = mongoose.model('User', userSchema)

module.exports = userModel