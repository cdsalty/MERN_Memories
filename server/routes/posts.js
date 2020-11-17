// any routes that have something to do with posts, such as a memory card, will go here
import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;





// will refer to as postRoutes