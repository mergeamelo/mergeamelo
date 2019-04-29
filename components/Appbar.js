import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import IosMenu from 'react-ionicons/lib/IosMenu'
import IconButton from '@material-ui/core/IconButton'
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default props => {
  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={() => setMenuStatus(true)} style={{ marginLeft: '-20px' }} aria-label="Menu">
            <IosMenu color="white" />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" color="inherit">
              Mergeamelo
        </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={menuStatus} onClose={() => setMenuStatus(false)}>
        <List>
          <ListItem button>
            <a style={{textDecoration: 'none'}} href="https://github.com/mergeamelo/mergeamelo/projects" target="_blank">
              <IosCompassOutline style={{ marginRight: '10px', verticalAlign: 'bottom' }} /> Mergeamelo roadmap
            </a>
        </ListItem>
        </List>
      </Drawer>
    </>
  )
}