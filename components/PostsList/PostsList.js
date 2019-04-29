import React from 'react'
import List from '@material-ui/core/List'

import Spinner from '../Spinner'
import PostCard from '../PostCard'

export default props =>
  <>
    <List style={{width: '100%'}}>
      <Spinner show={!props.posts}>
        {props.posts && props.posts.map((p, key) => (
          <PostCard post={p}/>
        ))}
      </Spinner>
    </List>
  </>