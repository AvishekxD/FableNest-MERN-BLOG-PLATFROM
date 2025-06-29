import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";
import { clerkClient } from "@clerk/clerk-sdk-node";

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
    const profileImage =
    eventData.image_url ||
    eventData.profile_image_url ||
    "https://i.stack.imgur.com/l60Hf.png";

    const newUser = new User({
      clerkUserId: eventData.id,
      username: eventData.username || eventData.email_addresses?.[0]?.email_address,
      email: eventData.email_addresses?.[0]?.email_address,
      img: profileImage,
    });

    try {
      const savedUser = await newUser.save();
      console.log("✅ User saved to MongoDB:", savedUser);

      // ✅ Now update Clerk's publicMetadata with mongoId
      await clerkClient.users.updateUserMetadata(eventData.id, {
        publicMetadata: {
          mongoId: savedUser._id.toString(),
        },
      });

      console.log("🔗 Clerk user metadata updated with mongoId");

    } catch (err) {
      console.error("❌ Error saving user or updating metadata:", err.message);
    } 
  }

  // ✅ NEW: Update user when profile info (like image) is changed
  if (eventType === "user.updated") {
    console.log("♻️ Updating user:", eventData);

    try {
      const updatedUser = await User.findOneAndUpdate(
        { clerkUserId: eventData.id },
        {
          username: eventData.username || eventData.email_addresses?.[0]?.email_address,
          email: eventData.email_addresses?.[0]?.email_address,
          img:
            eventData.image_url ||
            eventData.profile_image_url ||
            "https://i.stack.imgur.com/l60Hf.png",
        },
        { new: true }
      );

      if (updatedUser) {
        console.log("✅ User updated in MongoDB:", updatedUser);
      } else {
        console.warn("⚠️ User not found to update in MongoDB");
      }
    } catch (err) {
      console.error("❌ Error updating user:", err.message);
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
