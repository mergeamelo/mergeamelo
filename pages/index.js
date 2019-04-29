import React from 'react'
import Appbar from '../components/Appbar'
import PostsList from '../components/PostsList/PostsList'
import Container from './../components/Container'
import ContentContainer from '../components/ContentContainer'
import MergeameloInfo from '../components/MergeameloInfo'

import posts from './../components/PostsList/posts'

export default props => {
  return (
    <>
      <Appbar/>
        <Container>
          <ContentContainer>
            <MergeameloInfo />
            <PostsList posts={posts} />
          </ContentContainer>
        </Container>
    </>
  )
}