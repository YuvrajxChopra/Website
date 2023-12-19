import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";
//import pkg from 'chat-engine';  // Import the chat-engine module using CommonJS syntax
//const { ChatEngine } = pkg;  // Destructure the ChatEngine class from the package
//import { ChatEngineCore } from 'chat-engine';  // Import the chat-engine module using CommonJS syntax
//const { ChatEngine } = ChatEngineCore ;
//This section imports all the necessary modules and dependencies required for the application, such as Express.js, Mongoose, dotenv for environment variables, and various middleware and route handlers.
import axios from "axios";
import { error } from "console";


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

export const initializeChatEngine = async (user) => {
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: `${user.firstName}${user.lastName}`,
        first_name: user.firstName,
        last_name: user.lastName,
        avatar: user.picturePath
      },
      {
        headers: {
          "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY,
        },
      }
    );
    if (response.status === 200) {
      console.log("User ID:", response.data.id);
      console.log("ChatEngine user connected!");
      user.chatEngine = response.data;
      console.log("User created in ChatEngine!");
    } else {
      console.error("Failed to create user in ChatEngine:", response.data);
    }
  } catch (error) {
    console.log(error);
    //throw error;
  }
};

app.get('/user/:userId/details', async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("User " + userId + " called!");
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userDetails = {
      email: user.email,
      secret: user.firstName + user.lastName,
    };
    console.log(userDetails);
    res.status(200).json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/* ROUTES WITH FILES */
// Authorization
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    //User.insertMany(users);
    //Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
