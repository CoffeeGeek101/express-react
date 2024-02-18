import express from 'express';
import { currentUser } from '../handlers/currentuser';
import { userVerify } from '../middleware/userVerify';

const router = express.Router();
router.route('/getcurrentuser').get(userVerify,currentUser);

export default router;