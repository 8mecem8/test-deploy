//Import Node.js Packages...
const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');



//Import local Files...
const middleware = require('../Utilities/middleware');
const userModel = require('../Databases/MongoDb/Models/userModel')





exports.allMiddlewares = (app) =>
{
    app.use(compression({}))
    app.use(cors())
    app.use(morgan("dev"))
    app.use(bodyParser.json());  // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({ extended: false })); // to support URL-encoded bodies
    app.use(express.static(path.join(__dirname, '../dist')))

     //app.use(express.static(path.join(__dirname, '/build'))) //this middleware commented because instead of serving html files as default, I set the route method
    app.use(express.static(path.join(__dirname, '/404')))
    app.use(cookieParser());
    app.use(middleware.requestLogger)
    app.use(middleware.errorHandler)
    app.use(session({genid: req => uuidv4(), secret: `${process.env.SESSION_SECRET}`,store: MongoStore.create({
      mongoUrl: `${process.env.DB_C}`,
  }), resave: false, saveUninitialized: true,cookie: {maxAge: 1000 * 60 * 60 * 24 * 7,httpOnly: true, secure: true }}));
    app.use(passport.initialize());
    app.use(passport.session());


    


    // configure Passport.js to use the local strategy for authentication
    passport.use(

 
        new LocalStrategy({usernameField: "email"}, async (email, password, done) => {
            // check if user with this email exists
            console.log("in strategy");
            // await user here
            const user = await userModel.findOne({email: email});
            console.log("got user", user);
            if (!user) {
                return done(null, false, {message: "Email or password incorrect"});
            }
            // if yes, check if passwords match
            bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    // if yes, return that user
                    return done(null, user, {message: "Found user - passwords match"});
                } else {
                    return done(null, false, {message: "Email or password incorrect"})
                }
            })
        })
    
    );





    passport.serializeUser((user, cb) => {
      // do stuff here
      cb(null, user)
  });
  // 3. add deserialize function to passport library
  // take out of session
  passport.deserializeUser(async (id, cb) => {
      return cb(null, await userModel.findById(id))
  });






}