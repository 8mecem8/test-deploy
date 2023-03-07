const userRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { user,updateAvatar,getUserInfo} = require('../Controllers/userController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/EXAMPLE_authMWs')


// Routes-------------------------------------------------------------------------
userRouter.get('/test',user)
userRouter.get('/getUserInfo/:userID',getUserInfo)
userRouter.post('/profile',updateAvatar)




module.exports = userRouter


