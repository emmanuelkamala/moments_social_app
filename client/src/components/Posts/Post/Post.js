import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/core/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/core/icons/Delete';
import MoreHorizIcon from '@material-ui/core/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';

function Post({ post }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
    </Card>
  )
}

export default Post;
