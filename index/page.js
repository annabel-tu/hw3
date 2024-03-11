// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ANNABEL Tu</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <h1>ANNABEL TU</h1>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">My Portfolio</a>
          </li>
        </ul>
      </nav>

      <div className="annabel_unc">
        <img src="/annabel_unc.jpg" alt="This is an image of me at UNC." />
      </div>

      <main>
        <section className="bio">
          <div className="container">
            <h3>
              I'm Annabel, a Computer Science major with a minor in Data Science at the University of North Carolina at Chapel Hill.
              In addition to my studies, I enjoy reading, dancing, and spending time with friends.
            </h3>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <div className="image-grid">
              <img src="/areo.jpg" alt="Areo, my dog" />
              <img src="/dancing.jpg" alt="Me dancing" />
            </div>
          </div>
        </section>
      </main>

      <script src="/script.js" defer></script>
    </div>
  );
}
