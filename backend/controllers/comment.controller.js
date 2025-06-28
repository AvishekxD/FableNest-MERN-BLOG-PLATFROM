import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  res.json(comments);
};

export const addComment = async (req, res) => {
  try {
    const clerkUserId = req.auth().userId;
    const postId = req.params.postId;
    const user = await User.findOne({ clerkUserId });
    
    if (!user) return res.status(404).json("User not found!");

    const { desc } = req.body;
    

    const comment = new Comment({
      desc,
      user: user._id,
      post: postId,
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    console.error("Add comment error:", err);
    res.status(500).json("Server error");
  }
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth().userId;
  const id = req.params.id;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const role = req.auth().sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Comment.findByIdAndDelete(id);
    return res.status(200).json("Comment has been deleted");
  }

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Comment.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deletedComment) {
    return res.status(403).json("You can delete only your comment!");
  }

  res.status(200).json("Comment deleted");
};