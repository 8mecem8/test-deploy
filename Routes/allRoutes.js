
// İmported Route files-------------------------------------------------------------------------
const mainpageRouter = require("./Route-Links/serverMainPage")
const authRouter = require("./Route-Links/authRouter");
const userRouter = require("./Route-Links/userRouter");
const conversationsRouter = require("./Route-Links/conversationsRouter");


exports.allRoutes = (app)=>
{   
    
    app.use("/api/conversations", conversationsRouter);
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter);

    //Server Serve Main Web Page | should be at the end the endpoint list since we are using "*"
    app.use('*',mainpageRouter)
}