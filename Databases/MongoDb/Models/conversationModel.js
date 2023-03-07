const mongoose = require('mongoose')


const { ObjectId } = mongoose.Schema;


const ConversationSchema = new mongoose.Schema({
  members:
    [{
      type: ObjectId,
      ref:'User',
      required: true, 
      index: true,
    }],
  messages: 
    [{
      text:{type:String,required:true},
      sender:{type: ObjectId,ref:'User',}      
    }],
},{timestamps: true});






const conversationModel = mongoose.model('Conversation', ConversationSchema)

module.exports = conversationModel