const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
const user = new Schema({
  username: { type: String, required: [true, 'Full names required'] },
  email: { type: String,required: [true, 'Please enter an email'], unique:true, lowercase:true, validate:[isEmail, 'please enter a valid email'] },
  tel: { type: String,required: [true, 'Please enter telephone number'], minlength:[10, 'min length is 10'], unique:true},
  role: { type: String,required: true,default: "User" },
  pwd: { type: String,required: [true, 'Please enter a password'], minlength:[6, 'min password length is 6']},
  createdAt: { type: Date,default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// user.post('save',(doc, next)=>{
//   console.log('user created',doc);
//   next();
// })

// arrow functions can't access this
user.pre('save',async function(next){
  const salt = await bcrypt.genSalt()
  this.pwd =await bcrypt.hash(this.pwd, salt);
  
  next();
})

// Static methods to login
user.statics.login = async function(email, pwd){
  const person = await this.findOne({email});
  if (person){
    const auth = await bcrypt.compare(pwd, person.pwd);
    if (auth){
      return person;
    }
    throw Error('Incorrect Password');

  }
  throw Error('Incorrect email');
}

const User = mongoose.model('user',user);


module.exports = User;