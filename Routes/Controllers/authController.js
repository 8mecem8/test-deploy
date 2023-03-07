const userModel = require("../../Databases/MongoDb/Models/userModel")
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require("express-session");



exports.createUser = async(req,res,next)=>
{
    console.log(req.body,"createuser endpoint")
    

    try
    {

        const hashedPass = await bcrypt.hash(req.body.password, 10);
        let newUserinMongo = await userModel.create({email:req.body.email,name:req.body.name,passwordHash:hashedPass})
        
        console.log(newUserinMongo,'newUserinMongo')

        res.json(newUserinMongo)
    }
    catch(err)
    {
        res.status(500).json(err)
    }

    
   
}



exports.loginUser= (req,res,next)=>
{


    passport.authenticate("local", (err, user, message) => {
        console.log(message);
        if (err) throw err;
        if (!user) {
            res.json({
                message: "login failed",
                user: false
            })
        } else {
            // delete user.password;
            req.logIn(user, err => {
                if (err) throw err;

                res.cookie('mycookie', "asdadsadasdasdasd" , { maxAge: 900000, httpOnly: true });
                res.json(req.session)
            })
        }
    })(req, res, next);

}