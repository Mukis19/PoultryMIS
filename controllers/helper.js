const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const handleErrors = (err)=>{

    
    // Duplicate error codes
    // let duplicateerrors = {email:'',tel:''};
    // if (err.message.includes('E11000 duplicate key error collection')){
    //     Object.values(err.errors).forEach(({properties})=>{
    //         duplicateerrors[properties.path] = properties.message
    //     })
    //     return duplicateerrors;
    //  }

    // Normal errors
    let error = {email:'', username:'', tel:'',pwd:'' } ;
    if (err.message.includes('user validation failed')){
       Object.values(err.errors).forEach(({properties})=>{
        error[properties.path] = properties.message
       })
       return error;
    }

  
    // incorrect login credentials
    if (err.message === 'Incorrect Password'){
        error.pwd = 'Incorrect Password';

    }
    if (err.message === 'Incorrect email'){
        error.email = 'Incorrect email';

    }

      // Duplicate error codes
    if (err.code===11000 && err.keyPattern.tel===1){
        error.tel = "phone number already exists";
    }
    if (err.code===11000 && err.keyPattern.email===1){
        error.email = "email number already exists";
    }
    return error;

}

// creating a token
const secret = process.env.jwtsecretkey;
const maxAge = 24*60*60;
const createToken = (id)=>{
    return jwt.sign({id},secret, {expiresIn:maxAge} )
}

module.exports = {handleErrors, maxAge, createToken};