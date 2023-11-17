import express from 'express';

import {getUsers, updateUser, getUserUpdate, search } from '../controllers/users.js'
import { authenticateJWT } from '../middleware/index.js';


const router = express.Router();

router.get('/', getUsers);

// router.post('/', createUser);
router.post('/update/get-user',authenticateJWT, getUserUpdate);
router.post('/update',authenticateJWT, updateUser);
router.post('/search',authenticateJWT, search);
// router.post('/register', createUser);


export default router;