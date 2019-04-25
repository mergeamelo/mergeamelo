import React, { useEffect, useState } from 'react'
import Appbar from './Appbar';
import ContentContainer from './ContentContainer'
import Container from './Container'
import ReactMarkdown from 'react-markdown'
import AuthorInfo from './AuthorInfo';
import { Divider } from '@material-ui/core'
import hljs from 'highlight.js';

export default props => {

  const [post, setPost] = useState('')

  useEffect(() => {
    fetch(`/static/posts/${props.fileName}.md`).then(response => response.text()).then(text => setPost(text))
  }, [])

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [post])

  return(
    <>
      <Appbar />
      <Container>
        <ContentContainer>
          <ReactMarkdown source={post} />
          <Divider />
          <AuthorInfo 
            authorName={props.authorName}
            avatar="https://pbs.twimg.com/profile_images/1097088970771628032/lAcUoD9r_400x400.jpg"
            github={props.github}
            twitter={props.twitter}
          />
        </ContentContainer>
      </Container>
    </>
  )
}