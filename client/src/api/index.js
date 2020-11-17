import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
// To create a new post:
// export const createPost = (newPost) => {
//   axios.post(url, newPost);
// }

/*
- will be used to make the api calls
- start by defining the url that will be used to retrieve the data. (in this case, the post)
- create the function to make the axios call

* adding redux capabilities:
  - all actions towards the backend will be done using Redux.
    - to do this, you must "DISPATCH ACTIONS"

- To successfully implement Redux, it requires some boilerplate setup (inside front-end source setup)
  - the con is the setup and all the folders & files that's needed, but by doing this, it allows the application to be more scalable.
  1. Create a folder called 'actions' and another one called 'reducers'
  2. Inside of both folders, create a file called 'posts.js'
  3. Inside of the reducers folder, also create an 'index.js' file. (the starting point once redux is initialized)

  --> To initialize Redux:
  PART 1:
    a. Install react-redux... npm install react-redux
    b. inside the main/root level file, index.js
      - import { Provider } from 'react-redux' --> Provider will keep track of the store, the global state, in order to access it anywhere in the application
      - import { createStore, applyMiddleware, compose } from 'redux';
      - import thunk from 'redux-thunk';
    c. Now, to set up REDUX starting with the store
      - Create the store... "const store = createStore()" -> createStore takes takes 2 things..
                1) the 'reducers'(which have not been defined yet)
                2) compose(): compose will take 'applyMiddleware' it accepts one arguement, 'thunk'
      - const store = createStore(reducers, compose(applyMiddleware(thunk)));
    d. import reducers to access the reducers
      - import reducers from './reducers'

      Next, add the reducers

  PART 2:
    a. In the reducers folder, inside 'index.js', we start by importing combineReducers and then defining it's functionality
      - import { combineReducers } from 'redux';
      - export default combineReducers()
    b. inside combineReducers, pass an object that will hold all the reducers. I only need to pass it 'posts'; for this reason, must import 'posts'
      - import posts from './posts'; ---> don't forget to import
    c. In the reducers folder, open the 'posts.js' file

  PART 2b:
    Reducers
    - What are reducers?
      - functions that accepts two arguements, state and action
      - based on the 'action.type', it will return 'THE  STATE THAT WAS CHANGED BY THE ACTION"
      - state MUST always have an initial value. (in the example below, "posts" represents the state)

    a. Create the reducer function
      - const reducer = (posts = [], action) => {
          switch (action.type) {
            case "FETCH_ALL":
              return action.payload;  // the posts
            case "CREATE":
                return posts;
              default:
                return posts;
            }
          }
      - the reducer function is being called and used inside of the index.js file in the reducers folder

  PART 4: the provider and final steps...
    a. (inside src index.js) now that the store's function is fully setup, wrap the provider around <App />
    b. wrap the Provider around App and pass it the value of the store to be passed down later
      - <Provider store = {store}>
          <App />
        </Provider>,...


  PART 5: Making use of HOOKS in REDUX
    a. inside the main app.js file, import the dispatch hook
      - import { useDispatch } from react-redux;
    b. call on useDispatch
      - const dispatch = useDispatch();
        - next, how to dispatch an action??? ---> You dispatch an action with the useEffect hook
        - useEffect is initally going to be just the component that mounts but later will become 'component will update'
    c. import useEffect and call it inside App.js
      - import React, { useEffect } from 'react'
      - useEffect(() => {
          dispatch();
        }, [])
            \-> only problem... no action to dispatch...
    d. Create some actions to import
      - import { getPost } from './actions/posts';
      - next, pass 'getPosts()' to dispatch
        - useEffect(() => {
            dispatch(getPosts());
          }, [dispatch])

    ----> const App = () => {
            const classes = useStyles();
            const dispatch = useDispatch();
            useEffect(() => {
              dispatch(getPosts());
            }, [dispatch]);



  PART 6: USE REDUX ---> starting by dispatching the getPosts action inside the App.js (still need to create getPost...)
    - make sure to go and export getPosts() from the actions
    - now, create the items/posts; Create and go inside posts.js under the actions folder.
      - import * as api from '../api'; means import everything from the 'actions' as 'api' to reference it
    - Next, create the ACTION CREATORS: action creators are functions that return actions.
      ** since we are retrieving DATA, the process WILL TAKE SOME TIME TO COMPLETE THE TASK **
          - action creators are a function that define the action type along with the payload. they must return an/the ACTION

            - const getPosts = () => {
                const action = {
                  type: 'FETCH_ALL',
                  payload: []
                }

                return action;
            }

  ** THERE IS ONE MAIN ISSUE WITH THE ABOVE: we are fetching asynchronous data **
  - to fetch all the post, it will require some time... imported Redux Thunk
  - ReduxThunk provides the ability to pass an additional arrow function.
    - to do this, add async and another property, 'dispatch'
  - this creates a function that returns another function and we can now use async/await
  - instead of RETURNING the action, you must now DISPATCH(ACTION)
    - an ACTION is an OBJECT that includes the type and payload
  - as soon as an action gets dispatched (from the useEffect inside App.js), it immediately goes to the posts reducer and there it handles handling the logic created inside the reducer.
    - since the posts that are getting returned inside the reducer, instead of returning posts, you can instead return action.payload since that is our posts.

    ACTION CREATORS - are functions that return an action.
      - An action is an object that has the type and a payload.
      - Since dealing with async logic, we have to add
        the async (dispatch) function provided by Redux-Thunk; Instead of returning the action,
        it must now be dispatched, dispatch(action)
      - to fetch all the post, it will require some time... imported Redux Thunk
      - ReduxThunk provides the ability to pass an additional arrow function.
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

PART 7: Retrieving the data within the components.
  - inside the component that needs the posts... (which is the Post component)
  - need to fetch the data from the global redux store...
    - to accomplish this, make use of  "SELECTORS " --> first, import { useSelector } from 'react-redux';
    - call the useSelector hook;
      - useSelector takes a callback function that takes a parameter which gives access to the entire store or 'state'.
          - const posts = useSelector((state) => state.posts); // it is called 'posts' from the name I gave inside the reducers. "combineReducers({ posts })"
          ** this does cause a cors error...
            - to fix this, go inside the package.json and under private, write out "proxy": "httpl//localhost:5000",


PART 8:  Implement the form in order to make a post request to database and have it add new post

PART 9: To CREATE A NEW POST
  - inside api index.js,
    export const createPost = (newPost) => {
      axios.post(url, newPost);
    }
  - inside of actions, post.js


*/