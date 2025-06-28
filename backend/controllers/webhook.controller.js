import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return res.status(500).json({ message: "Webhook secret is not configured" });
  }

  const headers = req.headers;
  const payload = Buffer.isBuffer(req.body)
    ? req.body
    : Buffer.from(JSON.stringify(req.body));

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.error("❌ Clerk Webhook verification failed:", err.message);
    return res.status(400).json({ message: "Webhook verification failed!" });
  }

  const eventType = evt.type;
  const eventData = evt.data;

  if (eventType === "user.created") {
    console.log("👤 Creating user:", eventData);

    const newUser = new User({
      clerkUserId: eventData.id,
      username: eventData.username || eventData.email_addresses?.[0]?.email_address,
      email: eventData.email_addresses?.[0]?.email_address,
      img: eventData.profile_image_url,
    });

    try {
      await newUser.save();
      console.log("✅ User saved to MongoDB:", newUser);
    } catch (err) {
      console.error("❌ Error saving user:", err.message);
    }
  }

  if (eventType === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: eventData.id,
    });

    if (deletedUser) {
      await Post.deleteMany({ user: deletedUser._id });
      await Comment.deleteMany({ user: deletedUser._id });
      console.log("🗑️ Deleted user and related posts/comments");
    }
  }

  return res.status(200).json({ message: "Webhook received" });
};
