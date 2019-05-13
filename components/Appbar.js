import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import IosMenu from 'react-ionicons/lib/IosMenu'
import IconButton from '@material-ui/core/IconButton'
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default props => {
  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <>
      <AppBar position="static" style={{backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton onClick={() => setMenuStatus(true)} style={{ marginLeft: '-20px' }} aria-label="Menu">
            <IosMenu color="white" />
          </IconButton>
          <Link href="/">
            <img style={{height: '68px'}} src="/static/images/logo.png"/>
          </Link>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={menuStatus} onClose={() => setMenuStatus(false)}>
        <List style={{backgroundColor: 'black', height: '100%'}}>
          <ListItem button>
            <a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/mergeamelo/mergeamelo/projects" target="_blank">
              <IosCompassOutline color="white" style={{ marginRight: '10px', verticalAlign: 'bottom' }} /> Mergeamelo roadmap
            </a>
          </ListItem>
          <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '50px'}}>
              <img src="/static/images/logo.png" />
            </div>
          </div>
        </List>
      </SwipeableDrawer>
    </>
  )
}