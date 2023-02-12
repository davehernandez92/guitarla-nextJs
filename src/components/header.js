import Image from "next/image"
import Link from "next/link"
import logo from "../../public/img/logo.svg"
import { useRouter } from "next/router"
import styles from '../styles/header.module.css'

export default function Header () {

    const router = useRouter()
     
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href="/">

                    <Image src={logo.src} width={300} height={40} alt=''/>
                
            </Link>

            <nav className={styles.navegacion}>
                <Link className={router.pathname === '/' ? styles.active : ''} href="/">
                   Home
                </Link>
                <Link className={router.pathname === '/about' ? styles.active : ''} href="/about">
                    About
                </Link>
                <Link className={router.pathname === '/store' ? styles.active : ''} href="/store">
                   Store
                </Link>
                <Link className={router.pathname === '/blog' ? styles.active : ''} href="/blog">
                    Blog
                </Link>

                <Link href="/cart">
                    <Image width={30} height={25} src='/img/carrito.png' alt="cart logo"></Image>
                </Link>
            </nav>
        </div>
    </header>
  )
}
