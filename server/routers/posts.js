import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";
const router = express.Router();
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { PostModel } from "../models/PostModel.js";
//khởi tạo middleware trỏ tới nơi lưu ảnh
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Thư mục lưu trữ hình ảnh
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
router.get("/", getPosts);

router.post("/", upload.single('image'), (req, res, next)=>{
    const product = new PostModel({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        body: req.body.body,
        image: '/images/' + req.file.filename,
    });
    product.save()
    .then(() => {
        res.redirect('/products?success=1');
    }).catch(() => { res.redirect('/products?failed=1') });
});

router.post("/update", updatePost);

export default router;
