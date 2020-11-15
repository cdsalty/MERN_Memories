import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts); // it is called 'posts' from the name I gave inside the reducers, in index.js "combineReducers({ posts })"
  const classes = useStyles();
  console.log(posts)

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
