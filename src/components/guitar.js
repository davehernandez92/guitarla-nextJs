import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"


export default function Guitar({guitar}) {
  const { description, image, name, price, url} = guitar
  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Guitar model ${name}`}
      />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>{price}</p>
        <Link href={`/guitars/${url}`}>View product</Link>
      </div>
    </div>
  );
}
