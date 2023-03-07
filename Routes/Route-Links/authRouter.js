const authRouter = require('express').Router()
const passport = require('passport');

// imported Controllers-------------------------------------------------------------------------
const { createUser,loginUser } = require('../Controllers/authController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck } = require('../Middlewares/EXAMPLE_authMWs')




// Routes-------------------------------------------------------------------------
authRouter.post('/create-user',createUser)
authRouter.post('/login-user',loginUser)




module.exports = authRouter


