// To hold all the "HANDLERS" for the routes. In other words, we can seperate out the routes here and not get lost in a bunch of routes
// taking the info from router.get and applying here

export const getPosts = (req, res) => {
  res.send("The route works!")
}