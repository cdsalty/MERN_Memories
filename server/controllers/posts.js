import PostMessage from '../models/postMessage.js';

// To hold all the "HANDLERS" for the routes. seperating out the routes and not get lost in a bunch of routes
// taking the info from router.get and applying here


// TO GET A POST
export const getPosts = async (req, res) => {
  console.log("getPost function called")
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages)
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


// TO CREATE A POST
export const createPost = async (req, res) => {
  // what to do? we need to get the information from the form in order to create a post.
  // post request always provide access to "req.body"; will come from the form data on the front end
  const post = req.body; // form data from the post
  const newPost = new PostMessage(post);
  // console.log(typeof (`${newPost}`));
  try {
    await newPost.save();

    res.status(201).json(newPost);
    console.log("SUCCESS CREATEPOST MESSAGE")
  } catch (error) {
    res.status(409).json({ message: error.message })
    console.log("createPost failed!!!")
  }
}
// export const createPost = async (req, res) => {
//   const { title, message, selectedFile, creator, tags } = req.body;

//   try {
//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
//     await newPostMessage.save();

//     res.status(201).json(newPostMessage);
//     console.log("SUCCESS CREATEPOST MESSAGE")
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//     console.log("createPost failed!!!")
//   }
// }


