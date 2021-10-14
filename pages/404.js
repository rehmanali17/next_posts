import Link from 'next/link'
import { useRouter } from 'next//router'
import { useEffect } from 'react'

const _404 = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/users')
        },3000)
    },[])

    return (
        <div className='_404'>
            <p>Page not found</p>
            <Link className='_404link' href="/users">Go to home</Link>
        </div>
    )
}

export default _404
