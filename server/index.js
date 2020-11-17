import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; // provides access to the routes, specifically for getPosts and createPost

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());  //    *** make sure to specificy this BEFORE making your routes using app.use()

// Routes
app.use('/posts', postRoutes);  // adding prefix of 'posts' to all routes inside postRoutes -> http://localhost:5000/posts  (need to review.... )
// every route inside the routes.post.js, routes will start with posts... post and get


// SETUP MONGO DB
const CONNECTION_URL = 'mongodb+srv://soltis:Matthews@cluster0.u0uqh.mongodb.net/Project_0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// connect to DB (takes the db url and an object of options)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);





// for committing to git
// "files.exclude": {
//   "**/.git": true,
//   },