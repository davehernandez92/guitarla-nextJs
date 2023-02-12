import Image from "next/image"
import Link from "next/link"
import { formatDate } from "utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {
    const {content, image, title, url, publishedAt} = post 
   
  return (
    <article>
        <Image
            src={image.data.attributes.formats.medium.url}
            width={600}
            height={400}
            alt={`Article image ${title}`}
        />
        <div className={styles.contenido}>
            <h3>{title}</h3>
            <p className={styles.fecha}>{formatDate(publishedAt)}</p>
            <p className={styles.resumen    }>{content}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>
                Read Post
            </Link>
        </div>
    </article>
  )
}
