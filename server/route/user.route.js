import express from 'express';
const router = express.Router();
import { createUser, getUsers, editUser, deleteUser, home } from '../controller/user.controller.js';

router.get('/',home);
router.post('/createUser', createUser);
router.get('/getUsers', getUsers);
router.put('/editUser', editUser);
router.delete('/deleteUser', deleteUser);

export default router;