import React from 'react'
import Paper from '@material-ui/core/Paper'

export default props => 
  <div>
    <Paper style={{padding: '1px 15px 12px 15px'}}>
      <p>Estado de Mergeamelo:</p>
        <img src="https://api.netlify.com/api/v1/badges/66bbdb35-c15c-4d03-86d5-588ca0c04cc0/deploy-status" />
        <a href="https://github.com/mergeamelo/mergeamelo" target="_blank"><img style={{marginLeft: '10px', marginRight: '10px'}} src="https://img.shields.io/github/stars/mergeamelo/mergeamelo.svg?style=social" /></a>
        <a href="https://github.com/mergeamelo/mergeamelo" target="_blank"><img src="https://img.shields.io/github/forks/mergeamelo/mergeamelo.svg?style=social" /></a>
    </Paper>
  </div>