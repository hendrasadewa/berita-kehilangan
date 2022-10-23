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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Mencari bersama komunitas</h1>
              <p className="py-6">
                Bulletin board dan Twitter bot kami akan membantu Kamu
                berinteraksi dengan komunitas agar dapat segera bertemu kembali
                dengan individu yang telah hilang
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
