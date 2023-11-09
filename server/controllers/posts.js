import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        // test Data
        // const post = new PostModel({
        //     id: 12,
        //     user_id: 11,
        //     title: 'demo DB',
        //     body: 'test content'
        // });
        // post.save();

        const posts = await PostModel.find();
        console.log('posts', posts);
        res.status(200).json(posts);

    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const createPost = async (req, res) => {
    try {
        const NewPost = req.body;


        const post = new PostModel(NewPost);
        await post.save();

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({error: err});
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findOneAndUpdate(
            {user_id: updatePost.user_id}, 
            updatePost, 
            {new: true}
        );

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({error: err});
    }
};