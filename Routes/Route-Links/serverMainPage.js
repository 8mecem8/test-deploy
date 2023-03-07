const mainpageRouter = require('express').Router()



// imported Controllers-------------------------------------------------------------------------
const { serverMainPage } = require('../Controllers/mainPageController');





// Routes-------------------------------------------------------------------------
mainpageRouter.get("*", serverMainPage);




module.exports = mainpageRouter