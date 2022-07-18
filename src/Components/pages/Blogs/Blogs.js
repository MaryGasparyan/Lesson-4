import React from 'react'
import { useEffect, useState } from 'react';
import api from '../../../Helpers/api.js'
import Post from '../../Post/Post';
const Blogs = () => {
    const [posts, setPosts] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    useEffect(
      ()=>{
        (async ()=>{
          try{
            console.log("start")
            const data = await api.get("coffee/hot")
            setPosts(data)
           // console.log(data)
       
          }
          catch(error){
            console.log(error)
          }
          finally{
            setIsLoading(false)
          }
        })()
      },[])
    if(isLoading){
      <h1>Loading...</h1>
    }
    console.log(posts)
    return (<div><h1>Blog Articles About Coffee</h1>
    {
    // <Post title = {posts[0].title} description = {posts[0].description} id = {posts[0].id}/>
      // posts.map(post=>{
      //   console.log("Heey")
      //   return(
      //     <Post title = {post.title} description = {post.description} id = {post.id}/>
      //   )
      // }
      // )
    }
    </div>
    
    )
  };
  
  export default Blogs;