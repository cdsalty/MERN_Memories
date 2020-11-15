import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';


const Form = () => {
  // State
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const classes = useStyles();


  // Events
  const handleSubmit = () => {

  }

  const clear = () => {

  }

  console.log("FORM COMPONENT")

  return (
    <Paper className={classes.paper}>

      <form autocomplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>

        <Typography variant="h6">Creating a Memory</Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => ({ ...postData, selectedFile: base64 })}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>

        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>

      </form>

    </Paper>
  )
}

export default Form;


/*
value = {postData.creator}
  - this will store the value inside a post data object in the state, and then each object key is going to be a specific textfield

  ?? How to change the value assigned as '.creator' with the onChange event ??
    ?-->
*/