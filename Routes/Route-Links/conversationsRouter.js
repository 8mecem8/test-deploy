const conversationsRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const {createUpdateConversation,GetAllUserConversations} = require('../Controllers/conversationsController')




// Routes-------------------------------------------------------------------------
conversationsRouter.get('/getAllUserConversations/:userID',GetAllUserConversations)
conversationsRouter.post('/createUpdateConversation',createUpdateConversation)




module.exports = conversationsRouter


