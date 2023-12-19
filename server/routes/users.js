import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();
import User from "../models/User.js";

/* READ */
// so basically we are just grabbing information here
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.get("/current", verifyToken, (req, res) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(400).json({ error: "User not found." });
    }

    console.log("Current User:", currentUser);

    const userResponse = {
      id: currentUser.id,
      email: currentUser.email,
      fullName: `${currentUser.firstname} ${currentUser.lastname}`,
    };

    console.log("Sending JSON response:", userResponse);

    res.json(userResponse);
  } catch (error) {
    console.error("Error fetching current user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:userId/details", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userDetails = {
      email: user.email,
      secret: `${user.firstName}${user.lastName}`,
    };

    res.json(userDetails);
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;
    const post = await Post.findById(id);

    // Update comments
    if (comment) {
      post.comments.push(comment);
    }

    // Update likes
    const isLiked = post.likes.get(userId);
    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes, comments: post.comments },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


export default router;

