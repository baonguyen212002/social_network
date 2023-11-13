import express from 'express';
import {getUsers, checkUser, creatUser} from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers);

router.post('/', checkUser);
router.post('/register', creatUser);

export default router;