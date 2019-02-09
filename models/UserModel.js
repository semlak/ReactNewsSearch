const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


// used example from class exercises as well as https://stackoverflow.com/questions/14588032/mongoose-password-hashing
const UserSchema = new Schema({
  // email serves as unique username
  'email' : {
    type: String,
    require: true,
    // unique: true,
    match: [/.+@.+\..+/],
    validate: [input => input.length],
    index: true

  },

  // Note: actual password won't be stored, only salted hash of password
  // password: {
  // },

	'name' : {
    type: String,
    trim: true,
    required: "Name is required (not used as your userId, your email does that)"
  },
})

const otherPassportOptions = {
  usernameUnique: true,
  // selectFields: {username: true, email: true, fullname: true, } 
  passwordValidator: (input, cb) => {
    if (input.length < 6) {
      return cb({code: 400, messaage: "Password should be at least 6 characters long."})
    }
    return cb(null);
  }
}

UserSchema.plugin(passportLocalMongoose, otherPassportOptions);
// UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.toJSON = function() {
 var obj = this.toObject();
 delete obj.hash;
 delete obj.salt;
 return obj;
}





module.exports = mongoose.model('User', UserSchema);
