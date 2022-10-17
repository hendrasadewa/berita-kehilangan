import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Berita Kehilangan</title>
        <meta
          name="description"
          content="Papan buletin virtual tentang berita kehilangan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Berita Kehilangan</h1>
      </main>
    </div>
  );
};

export default Home;
