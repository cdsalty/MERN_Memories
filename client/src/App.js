import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>

        {/* The image is squashed; if I remove height, it corrects itself */}

        <img src={memories} alt="shaking hands" height="60px" />
      </AppBar>
      <Grow in>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App;
