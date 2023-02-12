import Layout from "@/components/layout";
import Guitar from "@/components/guitar";
import Post from "@/components/post";
import Course from "@/components/course";
import styles from "../styles/grid.module.css";

export default function Home({ guitarrasData, postsData, cursosData }) {

  console.log(cursosData);
  return (
    <>
      <Layout
        title={"Home"}
        description={"Home page GuitarLA , Online Store guitars"}
      >
        <main className="contenedor">
          <h1>Our collection</h1>
          <div className={styles.grid}>
          {guitarrasData?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
        </main>
        
        <Course
          course={cursosData}
        />
        <section>
          <h1 className="heading"> Blog</h1>
          <div className={styles.grid}>
            {postsData?.map( post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCurso = `${process.env.API_URL}/course?populate=image`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ]);

  const [{ data: guitarrasData }, { data: postsData }, { data: cursosData}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json([]),
    resCurso.json([])
  ]);

  return {
    props: {
      guitarrasData,
      postsData,
      cursosData
    },
  };
}
