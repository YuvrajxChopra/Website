import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // way to send user a webtoken so that they can use it for autherization
import User from "../models/User.js";
import { initializeChatEngine } from "../index.js";
/* REGISTER USER */
export const register = async (req, res) => {  // this is async because we are going to call mongoose database
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt(); // basically incrypting our password
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    
    const savedUser = await newUser.save();
    await initializeChatEngine(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(res.status(err.status));
    throw err;
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // destructuring from the req,body
    const user = await User.findOne({ email: email }); //using mongoose to trying to find one passed this email
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password); // matching the password
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id, email: user.email, firstname: user.firstName, lastname: user.lastName }, process.env.JWT_SECRET);
    delete user.password;
    console.log("logged");
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 