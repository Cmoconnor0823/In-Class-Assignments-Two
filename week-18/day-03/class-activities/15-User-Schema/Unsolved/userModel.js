var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *

   * 1: username: A string that will be be required, and also trimmed.*/
    username: {
      type:String,
      trim: true,
      required: "username is required"
    },
   /* 2: password: A string that will be required, trimmed, and at least 6 characters.*/
    password: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 20,
      // validate : [
      //   function(input) {
      //     return input.length >= 6;
      //   },
      //   //error message
      //   "Password must be longer than 6 characters"
      // ]
    },
   /* 3: email: A string that must be a valid email address and unique in our collection.*/
   /*
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/*/
   /* Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */
   email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
  },
   /* 4: userCreated: A date that will default to the current date.*/
   userCreated: {
     type: Date,
     default: Date.now
   },
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

// Look up regular expressions for validation
// 1: username: A string that will be be required, and also trimmed./
//  username: {
//    type: String,
//    match: [/^[a-z ,.'-]+$/i, "Please enter a valid e-mail address"],
//    trim: true
//  },
//   /* 2: password: A string that will be required, trimmed, and at least 6 characters. */
//  password: {
//    type: String,
//    match: [/^.(?=.{6,})(?=.[a-zA-Z])(?=.\d)(?=.[!#@$%&? "]).*$/, "Please enter a valid e-mail address"],
//    trim: true
//  },
//   /* 3: email: A string that must be a valid email address and unique in our collection. */
//        email: {
//    type: String,
//    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//  },