import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }

}


const posts = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>Posts</title>
            </Head>
            <div className={'center'}>
                {
                    posts.map(post => {
                        return (
                            <>
                            <Link key={post.id} href={`/posts/${post.id}`} ><p> { post.title }</p></Link>
                            <hr />
                            </>
                        )
                    })
                }
            </div>
        </Fragment>
        
    )
}

export default posts
