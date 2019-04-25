import React, { useEffect, useState } from 'react'
const ReactMarkdown = require('react-markdown')

export default props => {

  const [post, setPost] = useState('')

  useEffect(() => {
    fetch(`/static/posts/${props.fileName}.md`).then(response => response.text()).then(text => setPost(text))
  }, [])

  return(
    <>
      <ReactMarkdown source={post} />
    </>
  )
}