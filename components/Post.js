import React, { useEffect, useState } from 'react'
import Appbar from './Appbar'
import ContentContainer from './ContentContainer'
import Container from './Container'
import ReactMarkdown from 'react-markdown'
import AuthorInfo from './AuthorInfo'
import { Divider } from '@material-ui/core'
import hljs from 'highlight.js'
import Disqus from 'disqus-react'

export default props => {

  const [post, setPost] = useState('')

  const disqusConfig = {
    url: 'https://www.mergeamelo.com',
    identifier: props.fileName,
    title: props.fileName,
  }

  useEffect(() => {
    fetch(`/static/posts/${props.fileName}.md`).then(response => response.text()).then(text => setPost(text))
  }, [])

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  }, [post])

  return (
    <>
      <Appbar />
      <Container>
        <ContentContainer>
          <ReactMarkdown source={post} />
          <Divider />
          <AuthorInfo
            authorName={props.authorName}
            avatar={props.avatar}
            github={props.github}
            twitter={props.twitter}
          />
          <hr />
          <Disqus.DiscussionEmbed shortname={disqusConfig.title} config={disqusConfig} />
        </ContentContainer>
      </Container>
    </>
  )
}