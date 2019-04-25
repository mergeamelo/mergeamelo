import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default props => {

  const [postList, setPostList] = useState([])

  useEffect(() =>  {
    fetch('https://api.github.com/repos/mergeamelo/mergeamelo/contents/pages')
    .then(res => res.json())
    .then(res => setPostList(res.filter(p => p.name !== 'index.js')))
  },[])

  const getPostName = post => post.name.split('.')[0]

  return (
    <>
      <h1>Hme</h1>
      <ul>
        {postList.map((p, key) => (
          <li key={key}>
            <Link href={`/${getPostName(p)}`}>
              <a>{getPostName(p)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}