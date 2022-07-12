const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//defining schema for document
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  feedBack: [
    {
      Date: {
        type: Date,
        default: Date.now,
      },
      message: {
        type: String,
        require: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
// we are hashing the passward
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }
  next();
});
//storing the feedback from user
userSchema.methods.addMessage = async function (message) {
  try {
    this.feedBack = this.feedBack.concat({ message });
    await this.save();
  } catch (error) {
    console.log(error);
  }
};
//we are generating the token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);

    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
//create class of user collection
const User = mongoose.model("USER", userSchema);
module.exports = User;
