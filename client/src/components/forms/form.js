import React, {useState} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
const Form = () => {
    const [postData, setPostData] = useState({
        creator:'',title:'',message:'',tags:'',selectedFile:''
    });
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));

    }
    const clear = () => {

    }
    const classes = useStyles();
    return(
        <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" style={{margin: '20px'}}> New Image</Typography>
                <TextField name="creater"
                 variant="outlined"
                 label="Creator"
                 style={{width: '80%'}}
                 value={postData.creator} 
                 onChange={(e) => setPostData({...postData,creator:e.target.value})} 
                />
                <TextField name="title"
                 variant="outlined"
                 label="Title"
                 style={{width: '80%'}}
                 value={postData.title} 
                 onChange={(e) => setPostData({...postData,title:e.target.value})} 
                />
                <TextField name="message"
                 variant="outlined"
                 label="Message"
                 style={{width: '80%'}}
                 value={postData.message} 
                 onChange={(e) => setPostData({...postData,message:e.target.value})} 
                />
                <TextField name="tags"
                 variant="outlined"
                 label="Tags"
                 style={{width: '80%'}}
                 value={postData.tags} 
                 onChange={(e) => setPostData({...postData,tags:e.target.value})} 
                />
                <div className={classes.fileInput} style={{marginLeft: '40px'}}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData,selectedFile:base64}) }
                    />
                </div>
                <div className="" style={{marginTop: '20px', marginBottom:'10px'}}>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" style={{marginRight: '20px',width:'150px'}}>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={clear} style={{marginRight: '20px'}}>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}
export default Form;