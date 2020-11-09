import { combineReducers } from 'redux';
import posts from './posts'

export default combineReducers({
  // inside here, import and then call on any/ßall the reducers to use
  posts: posts,
})