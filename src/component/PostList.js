import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PostsList () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('http://wp-demo.local/wp-json/wp/v2/posts')
      .then(response => {
        setPosts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.link}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList
