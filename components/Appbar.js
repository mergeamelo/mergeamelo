import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

export default props => 
  <AppBar position="static" color="primary">
    <Toolbar>
      <Link href="/">
        <Typography variant="h6" color="inherit">
          Mergeamelo
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>