import React from 'react'
import { Container, Grid, Grow, AppBar, Typography } from '@material-ui/core';
import moments from './images/moments.png';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Moments</Typography>
        <img src={moments} alt="moments" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>

            </Grid>
            <Grid item xs={12} sm={5}>
              
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container >
  )
}

export default App;
