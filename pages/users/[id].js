export const getStaticPaths = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(element =>{
        return {
            params:{
                id: element.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context)=>{
    let id = context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    return {
        props: {
            user: data
        }
    }
}


const user = ({user}) => {
    return (
        <div className="center">
            <p>{user.name}</p>
            <hr/>
            <p>{user.email}</p>
            <hr/>
            <p>{user.phone}</p>
            <hr/>
        </div>
    )
}

export default user
