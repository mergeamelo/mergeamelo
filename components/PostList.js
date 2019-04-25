import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Router from 'next/router'

import Spinner from './Spinner'

const getPostName = post => post.name.split('.')[0]

export default props =>
  <>
    <h1>Posts:</h1>
    <List style={{width: '100%'}}>
      <Spinner show={!props.posts}>
        {props.posts && props.posts.map((p, key) => (
          <>
          <ListItem button onClick={() => Router.push(`/${getPostName(p)}`)} key={key}>
            <ListItemText>
              <span>{getPostName(p)}</span>
            </ListItemText>
          </ListItem>
          <Divider />
          </>
        ))}
      </Spinner>
    </List>
  </>