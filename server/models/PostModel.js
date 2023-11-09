import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        primaryKey: true,
        unique: true
    },
    user_id: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        require: true,
        default: 'Anomyous'
    },
    status: {
        type: String,
        required: true,
        default: 'online'
    },
    title: {
        type: String,
        required: true,
        maxlength: 150
    },
    attachment: String,
    body: {
        type: String,
        required: true,
        maxlength: 500
    },
    likeCount: {
        type: Number,
        default: 0
    }
    //Created_at , Updated_at
}, { timestamps: true} 
);

export const PostModel = mongoose.model('Post', schema);