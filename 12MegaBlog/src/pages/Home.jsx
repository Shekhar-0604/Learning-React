import React from 'react'
import { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {}, {})
    appwriteService.getPosts([])
  return (
    <div>Home</div>
  )
}

export default Home