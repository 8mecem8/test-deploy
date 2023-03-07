//Import Node.js Packages...
const express = require('express')


//Import local Files...
const middleware = require('./utilities/middleware');
const { allRoutes } = require('./Routes/allRoutes');
const { allMiddlewares } = require('./Middlewares/allMiddlewares');

//Decleration Variables
const app = express()



// Middlewares-------------------------------------------------------------------------
allMiddlewares(app)

// Routes-------------------------------------------------------------------------
allRoutes(app)


//404 error middleware, **** must be at the end of all other routes
app.use(middleware.unknownEndpoint)

module.exports = app