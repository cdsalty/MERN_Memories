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
    b. pass the Provider the value of the store to be passed down later
      - <Provider store = {store}>
          <App />
        </Provider>,...


*/