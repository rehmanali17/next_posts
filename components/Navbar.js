// import Image from "next/image"
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img className={styles.image} src='/favicon.ico' width={50} height={50}/>
            <div className={styles.links}>
                <Link className={styles.link} href="/users">Users</Link>
                <Link className={styles.link} href="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default Navbar
