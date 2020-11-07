import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; // remember to use in middleware to connect it to the application.

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use('/posts', postRoutes);  // test route -> http://localhost:5000/posts (verified it works)


// SETUP MONGO DB
const CONNECTION_URL = 'mongodb+srv://soltis:Matthews@cluster0.u0uqh.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Port
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