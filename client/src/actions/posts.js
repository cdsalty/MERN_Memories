// to import everything from the actions as 'api', use ' * ' to reference it to something.... api.fetchPost
import * as api from '../api'


// ACTION CREATORS --> it will actually be called inside App.js, in the useEffect hook
export const getPosts = () => async (dispatch) => {
  try {
    // try to fetch all data from the api...
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(data)

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}





/*
* ACTION CREATORS - are functions that return an action. An action is an object
that has the type and a payload. Since dealing with async logic, we have to add
the async (dispatch) function provided by Redux-Thunk; Instead of returning the action,
it must now be dispatched, dispatch(action)     "=> async (dispatch) =>"
- to fetch all the post, it will require some time... imported Redux Thunk
- ReduxThunk provides the ability to pass an additional arrow function.   "async (dispatch)"
  - to do this, add async and another property, 'dispatch'
    - this creates a function that returns another function and we can now use async/await
    - instead of RETURNING the action, you must now DISPATCH(ACTION)

THE BEGINNING/BASIC SETUP:
const getPosts = () => async (dispatch) => {
  const action = {
    type: 'FETCH_ALL',
    payload: [] // data that we store posts in
  }

  return action;
}


A shorter way of getting the response and then showing the data from the api.
*/
