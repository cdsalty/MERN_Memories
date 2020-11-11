import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);


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
    b. inside the main index.js folder:
      - import { Provider } from 'react-redux' --> Provider will keep track of the store, the global state, in order to access it anywhere in the application
      - import { createStore, applyMiddleware, compose } from 'redux';
      - import thunk from 'redux-thunk';
    c. Now, to set up REDUX, first create the store:
      - First, create the store... "createStore()" -> It takes 2 things,
        1) the 'reducers'(which have not been defined yet)
        2) compose(): compose will take 'applyMiddleware' and you pass 'thunk' to 'applyMiddleware'
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

  PART 3:
    Reducers
    - What are reducers?
      - functions that accepts two arguements, state and action
      - based on the 'action.type', it will do some logic which will return 'THE  STATE THAT WAS CHANGED BY THE ACTION"
      - state MUST always have an initial value.

    a. Create the reducer function
      - const reducer = (state, action) => {
        switch(action.type) {
          case "FETCH_ALL":
            return state; // in my case, i just put post...
          case "CREATE":
            return state;
        }
      }

  PART 4: the provider and final steps...
    a. (inside src index.js) now that the store's function is fully setup, wrap the provider around <App />
    b. wrap the Provider around App and pass it the value of the store to be passed down later
      - <Provider store = {store}>
          <App />
        </Provider>,...


  PART 5: IMPLEMENT LAST STEPS of REDUX
    a. inside the main app.js file, import the dispatch hook
      - import { useDispatch } from react-redux;
    b. call on useDispatch
      - const dispatch = useDispatch();
        - next, how to dispatch an action??? With the " USEEFFECT HOOK  "
        - useEffect is initally going to be just the component that mounts but later on will become 'component will update'
    c. import useEffect and call it inside App.js
      - import React, { useEffect } from 'react'
      - useEffect(() => {
          dispatch();
        }, [])
            \-> only problem... no action to dispatch...
    d.
      - import { getPost } from './actions/posts';
      - next, pass 'getPosts()' to dispatch
        - useEffect(() => {
            dispatch(getPosts());
          }, [dispatch])


  PART 6: USE REDUX
    - make sure to go and export getPosts() from the actions
    - now, time to to get and create the items/posts; Create and go inside posts.js under the actions folder.
      - import * as api from '../api'; means import everything as 'api' to reference it
    - Next, create the ACTION CREATORS: action creators are functions that return actions.
      ** since we are retrieving DATA, the process WILL REQUIRE TO TAKE SOME TIME TO COMPLETE THE TASK **
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


PART 7: Retrieving the data within the components.
- inside the component that needs the posts, which is the Post component.
  - inside the Post component, you need to fetch the data from the global redux store...
      - to accomplish this, we use   " SELECTORS "





*/