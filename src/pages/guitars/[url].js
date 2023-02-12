import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "@/components/layout";

export default function Product({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { name, description, image, price } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Invalid quantity");
      return;
    }

    // build an object of the selected guitar
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad,
    };

    // pass over information
    agregarCarrito(guitarraSeleccionada);
  };
  return (
    <Layout title={`Guitar ${name}`}>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          width={600}
          height={400}
          alt={`Guitar model ${name}`}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>{price}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="quantity">Qty:</label>
            <select
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              id="quantity"
            >
              <option value="0"> -- Select -- </option>
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <input type="submit" value="Add to cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}
