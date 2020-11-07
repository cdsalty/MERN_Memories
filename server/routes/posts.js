import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// router.get('/', (req, res) => {
//   // this will be the base route for localhost:5000/posts because I direct it to '/posts' inside of index.js middleware
//   res.send("The route works!")
// });

router.get('/', getPosts);
router.get('/', createPost);

export default router;


/*
// working with the controllers posts

// any routes that have something to do with posts, such as a memory card, will go here
router.get will always take a req and res; they go inside a callback function and run depending on the success or failure of a route.

*/

