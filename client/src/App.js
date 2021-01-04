import React,  { useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; //allowsus to dispatch an action

import { getPosts } from './actions/posts';
import Posts from './components/posts/posts'
import Form from './components/forms/form'
import useStyles from './styles';
const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center" style={{margin: '20px'}}>My Gallery, A Collection Of Memories I Cherish</Typography>
        {/* <img classNmae={classes.Image} src={photos} alt="photos" height="60"/> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7} lg={4}>
              <Form/>
            </Grid>
            <Grid item xs={12} sm={7} lg={6}>
              <Posts/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App;
