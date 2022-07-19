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
            const {data} = await api.get("posts")
            setPosts(data)
            //console.log(data[0].title)
       
          }
          catch(error){
            console.log("error")
          }
          finally{
            setIsLoading(false)
          }
        })()
      },[])
    if(isLoading){
      <h1>Loading...</h1>
    }
  
  
    return (<div>
      <h1>Blog Articles About Coffee</h1>
    

    {/* <Post title = {posts[0].title} description = {posts[0].body}/> */}
    { 
     
    // <Post title = {posts[0].title} description = {posts[0].body}/>
      
      posts.map((post)=>{
       
        return( <Post title = {post.title} description = {post.body} id = {post.id}/>)
       
     
      }
       )
    }
    </div>
    
    )
  };
  
  export default Blogs;