import { combineReducers } from 'redux';
import posts from './posts'

// inside combineReducers, import and then call on any/all the reducers to use
export default combineReducers({
  posts: posts,
})