import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import IconButton from '@material-ui/core/IconButton'

export default props => 
  <>
    <h4>Sobre el autor:</h4>
    <div>
      <img 
        style={{float: 'left', height: '50px', width: '50px', marginRight: '15px', borderRadius: '50%'}}
        src={props.avatar || 'https://cdn3.iconfinder.com/data/icons/bitcoin-cryptocurrency/512/Icon_2-128.png'} />
        <p style={{float: 'left', marginRight: '15px'}}>{props.authorName}</p>
    </div>
    <div>
      {props.twitter ? (
        <IconButton>
          <a href={`https://twitter.com/${props.twitter}`} target="_blank">
            <LogoTwitter />
          </a>
        </IconButton>
      ) : ''}
      {props.github ? (
        <IconButton>
          <a href={`https://github.com/${props.github}`} target="_blank">
            <LogoGithub />
          </a>
        </IconButton>
      ) : ''}
      </div>
  </>