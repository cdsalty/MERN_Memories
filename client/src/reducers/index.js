import { combineReducers } from 'redux';
import posts from './posts'

// inside combineReducers, import and then call on the reducers to need to be used.
export default combineReducers({
  posts: posts,
})