import React, { useState, useEffect } from 'react'
import Appbar from '../components/Appbar';
import PostList from '../components/PostList'
import Container from './../components/Container'
import ContentContainer from '../components/ContentContainer'

export default props => {

  const [posts, setPosts] = useState(null)

  useEffect(() =>  {
    fetch('https://api.github.com/repos/mergeamelo/mergeamelo/contents/pages')
    .then(res => res.json())
    .then(res => setPosts(res.filter(p => p.name !== 'index.js' && p. name !== '_app.js')))
  },[])

  return (
    <>
      <Appbar/>
        <Container>
          <ContentContainer>
            <PostList posts={posts} />
          </ContentContainer>
        </Container>
    </>
  )
}