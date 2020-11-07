// To hold all the "HANDLERS" for the routes. In other words, we can seperate out the routes here and not get lost in a bunch of routes
// taking the info from router.get and applying here

export const getPosts = async (req, res) => {
  console.log("The getPost function was called")
  try {
    // retrieve the posts in database(will take TIME)
    const postMessages = await PostMessage.find();
    res.send(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}



export const createPost = async (req, res) => {
  // with post post request, we have access to req.body (in this case it will be from the form data on the front end)
  const post = req.body; // form data
  const newPost = new PostMessage(post);

  try {
    await newPost.save;
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
  console.log("createPost function just ran");
}


