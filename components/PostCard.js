import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Router from 'next/router'

export default ({post}) =>
<Card>
  <CardContent>
    <Typography style={{marginBottom: '10px'}} variant="h5" component="h2">
      {post.name}
    </Typography>
    <Typography color="textSecondary" style={{marginBottom: '10px'}}>
      {post.author} - {post.date}
    </Typography>
    <Typography component="p">{post.description}</Typography>
  </CardContent>
  <CardActions style={{marginTop: '-10px'}}>
    <Button onClick={() => Router.push(`/${post.fileName}`)} size="small">Leer más</Button>
  </CardActions>
</Card>