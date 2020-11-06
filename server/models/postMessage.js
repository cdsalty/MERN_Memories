import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
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

// to convert the schema to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;