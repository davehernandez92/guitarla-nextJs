import Layout from "@/components/layout";
import Guitar from "@/components/guitar";
import styles from "../styles/grid.module.css";

export default function Store({ guitars }) {
  return (
    <Layout
      title={"Online Store"}
      description={"Online store page GuitarLA , selling instruments"}
    >
      <main className="contenedor">
        <h1 className="heading">Our collection</h1>

        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?populate=image`
  );
  const { data: guitars } = await respuesta.json();

  return {
    props: {
      guitars,
    },
  };
}
