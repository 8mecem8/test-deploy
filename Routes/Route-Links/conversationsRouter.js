const conversationsRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const {createUpdateConversation,GetAllUserConversations} = require('../Controllers/conversationsController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/EXAMPLE_authMWs')


// Routes-------------------------------------------------------------------------
conversationsRouter.get('/getAllUserConversations/:userID',GetAllUserConversations)
conversationsRouter.post('/createUpdateConversation',createUpdateConversation)




module.exports = conversationsRouter


