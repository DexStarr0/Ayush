const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../model/userSchema");

require("../db/conn");

router.get("/", (req, res) => {
  res.send("<h1>home route using router </h1>");
});
router.get("/register", (req, res) => {
  res.send("<h1>home ./register using router </h1>");
});

// post register
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill the detail properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(422).json({
        message: "Email already exist . plz try with different email.",
      });
    } else if (password != cpassword) {
      res.status(422).json({ message: "password is not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegister = await user.save();
      console.log(userRegister);
      res.status(201).json({ message: "user register succefully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//post signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "plz fill all filed properly" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (isMatch) {
        res.status(201).json({ message: "login successful" });
      } else {
        res.status(400).json({ error: "Wrong Credentials pass" });
      }
    } else {
      res.status(400).json({ error: "Wrong Credentials gmail" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
