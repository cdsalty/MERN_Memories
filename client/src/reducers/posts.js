
// - renamed the state to posts (state must ALWAYS have an initial value)
// const reducer = (posts = [], action) => {
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;  // the action.payload are the posts
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
}

// export default reducer;

//used insde index.js... I will import post and pass posts to combineReducers