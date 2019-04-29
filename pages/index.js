import React from 'react'
import Appbar from '../components/Appbar'
import PostsList from '../components/PostsList/PostsList'
import Container from './../components/Container'
import ContentContainer from '../components/ContentContainer'

import posts from './../components/PostsList/posts'

export default props => {
  return (
    <>
      <Appbar/>
        <Container>
          <ContentContainer>
            <PostsList posts={posts} />
          </ContentContainer>
        </Container>
    </>
  )
}