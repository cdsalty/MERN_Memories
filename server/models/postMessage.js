import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

// https://expressjs.com/
// https://mongoosejs.com/docs/

// https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
// https://hackernoon.com/hn-images/0*7LesGFlzQzpGiP8m
// https://media.geeksforgeeks.org/wp-content/uploads/mvc-block-diagram.png

// after creating the schema, need to convert it to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;