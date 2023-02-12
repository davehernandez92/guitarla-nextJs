import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            
            <nav className={styles.navegacion}>
                <Link href="/">
                    Home
                </Link>
                <Link  href="/about">
                    About
                </Link>
                <Link  href="/store">
                    Store
                </Link>
                <Link  href="/blog">
                    Blog
                </Link>
            </nav>

            <p className={styles.copyright}> All rights reserved {new Date().getFullYear()} </p>
        </div>
    </footer>
  )
}
 