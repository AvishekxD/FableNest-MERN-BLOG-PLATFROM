import express from "express"
import { 
    getPosts, 
    getPost, 
    createPost,
    deletePost,
    uploadAuth,
    featurePost,
    increasePostViews,
 } from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";
import { requireAuth } from "@clerk/express";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost)
router.put("/view/:id", increasePostViews);




export default router;