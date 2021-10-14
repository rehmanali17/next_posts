import Link from "next/link"

export const getStaticProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}


const users = ({users}) => {
    return (
        <div className="center">
            {
                users.map(user => {
                   return (
                    <>
                        <Link href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                        <hr/>
                    </>
                   )
                })
            }
        </div>
    )
}

export default users
