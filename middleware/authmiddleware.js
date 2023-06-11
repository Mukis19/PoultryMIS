const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/models')
dotenv.config();

const secret = process.env.jwtsecretkey;
// Checks for authentication
const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt;
    // console.log(token)
    if (token){
        jwt.verify(token, secret, (err, decodedToken)=>{
            if (err){
                // console.log(err.message);
                res.redirect('/login');
            }else{
                // console.log(decodedToken)
                next();
            }
        })

    }else{
        res.redirect('/login');
    }

}


// Check users who are logged in
const checkUser = (req, res, next)=>{
    const token = req.cookies.jwt;
    if (token){
        jwt.verify(token, secret, async (err, decodedToken)=>{
            if (err){
                res.locals.user = null;
                // next();
                // console.log(err.message);
                res.redirect('/login');
            }else{
                // console.log(decodedToken)
                const user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })

    }else{
        res.locals.user = null;
        next();
    }

}

module.exports = {requireAuth, checkUser};