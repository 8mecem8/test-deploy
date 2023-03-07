//Import Node.js Packages...
const express = require('express')


//Import local Files...
const { allRoutes } = require('./Routes/allRoutes');
const { allMiddlewares } = require('./Middlewares/allMiddlewares');

//Decleration Variables
const app = express()



// Middlewares-------------------------------------------------------------------------
allMiddlewares(app)

// Routes-------------------------------------------------------------------------
allRoutes(app)


module.exports = app
