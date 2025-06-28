import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
  try {
    const clerkUserId = req.auth()?.userId; 

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) return res.status(404).json("User not found");

    res.status(200).json(user.savedPosts);
  } catch (err) {
    console.error("Error getting saved posts:", err);
    res.status(500).json("Something went wrong");
  }
};

export const savePost = async (req, res) => {
  try {
    const clerkUserId = req.auth()?.userId; 
    const { postId } = req.body;

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) return res.status(404).json("User not found");

    const isSaved = user.savedPosts.includes(postId);

    await User.findByIdAndUpdate(
      user._id,
      isSaved
        ? { $pull: { savedPosts: postId } }
        : { $push: { savedPosts: postId } }
    );

    res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
  } catch (err) {
    console.error("Error saving post:", err);
    res.status(500).json("Something went wrong");
  }
};
