import express from 'express';
  
// import {getPosts, createPost, updatePost} from '../controllers/posts.js';
import {getUsers, createUser, updateUser, getUserUpdate, search } from '../controllers/users.js'
import { authenticateJWT } from '../middleware/index.js';

const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.post('/update', updatePost);

router.get('/', getUsers);
router.post('/', createUser);
router.post('/update/get-user',authenticateJWT, getUserUpdate);
router.post('/update',authenticateJWT, updateUser);
router.post('/search',authenticateJWT, search);

export default router;