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
    a. Install REDUX
    b. inside the main index.js folder:
      - import { Provider } from 'react-redux' --> Provider will keep track of the store, the global state, in order to access it anywhere in the application
      - import { createStore, applyMiddleware, compose } from 'redux';
      - import thunk from 'redux-thunk';
    c. To set redux, you first create the store,
      - "createStore()" -> It takes 2 things,
        1) the 'reducers'(which have not been defined yet)
        2) compose(): compose will take 'applyMiddleware' and you pass 'thunk' to 'applyMiddleware'
  THE ACTUAL SETUP:
      - const store = createStore(reducers, compose(applyMiddleware(thunk)));
    d. import the reducers
      - import reducers from './reducers'

  PART 2:
    a. In the reducers folder, inside 'index.js', we start by importing combineReducers and then defining it's functionality
      - import { combineReducers } from 'redux';
      - export default combineReducers()
    b. inside combineReducers, pass it an object that will take all the reducers needed. I only need to pass it 'posts'; for this reason, must import 'posts'
      - import posts from './posts';
    c. In the reducers folder, open the 'posts.js' file
*/