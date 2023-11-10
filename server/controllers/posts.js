import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        // test Data
        // const post = new PostModel({
        //     id: 3,
        //     user_id: 3,
        //     title: 'Post 3',
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


        const posts = new PostModel(NewPost);
        await posts.save();

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({error: err});
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const posts = await PostModel.findOneAndUpdate(
            {user_id: updatePost.user_id}, 
            updatePost, 
            {new: true}
        );

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({error: err});
    }
};