import Image from "next/image";
import Layout from "@/components/layout"
import styles from "../styles/about.module.css"


export default function About() {
  return (
    <Layout
      title={"About us"}
      description={"About us page GuitarLA , Online Store guitars"}
    >
      <main className="contenedor">
        <h1 className="heading">About us </h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="About us"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere porttitor consequat. Donec vestibulum euismod odio, id
              interdum turpis dapibus et. Vestibulum vestibulum dapibus augue at
              vehicula. Nunc hendrerit vel odio placerat bibendum. Duis mollis a
              nibh a porttitor. Suspendisse elementum hendrerit porta. Sed
              consectetur tortor mi, vitae ultricies libero efficitur sit amet.
              Proin eu augue odio. Etiam nec finibus augue, vel tristique purus.
              Mauris quis ex finibus.
            </p>

            <p>
              Quisque sit amet quam odio. Nulla imperdiet eros sit amet dui
              volutpat auctor. Donec imperdiet faucibus orci, sed consectetur
              tellus mattis nec. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
