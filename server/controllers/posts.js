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



// export const createPost = async (req, res) => {
//   // what to do? we need to get the information from the form in order to create a post.
//   // post request always provide access to "req.body"; will come from the form data on the front end
//   const post = req.body; // form data
//   const newPost = new PostMessage(post);
//   try {
//     await newPost.save;
//     res.status(200).json(newPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message })
//   }
//   console.log("createPost function just ran");
// }
export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  try {
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  console.log("createPost function ran")
}


