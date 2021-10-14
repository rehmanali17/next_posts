import React from 'react'
import { useRouter } from 'next/router'

export const getStaticPaths = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    let paths = data.map(element => {
        return { 
            params: { id: element.id.toString()  } 
        }
    }) 
    
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context)=>{
    const id = context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
} 

const post = ({post}) => {
    return (
        <div className="center">
            <p>{post.title}</p>
            <hr />
            <p>{post.body}</p>
        </div>
    )
}

export default post 
