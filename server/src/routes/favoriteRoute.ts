import { favorite, unfavorite } from "../handlers/favorites";
import { userVerify } from "../middleware/userVerify";

import express from 'express';

const router = express.Router();
router.route('/add').post(userVerify, favorite);
router.route('/remove').post(userVerify, unfavorite);
export default router;