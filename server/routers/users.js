import express from 'express';
  
// import {getPosts, createPost, updatePost} from '../controllers/posts.js';
import {getUsers, createUser } from '../controllers/users.js'

const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.post('/update', updatePost);

router.get('/', getUsers);
router.post('/', createUser);

export default router;