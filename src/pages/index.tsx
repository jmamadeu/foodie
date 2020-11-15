import Head from 'next/head';
import Link from 'next/link';

import HeaderNav from '../components/HeaderNav';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodie</title>
        <link rel='icon' href='/logo.png' />

        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main className={styles.homeContainer}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Link href='/'>
              <img src='/logo.svg' alt='Logo' />
            </Link>
            <ul>
              <li>
                <Link href='/'>
                  <a className={`${styles.links} ${styles.active}`}>Início</a>
                </Link>
              </li>
              <li>
                <Link href='/product'>
                  <a className={styles.links}>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href='/faq'>
                  <a className={styles.links}>Faq</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a className={styles.links}>Contactos</a>
                </Link>
              </li>
            </ul>
          </header>
          <div className={styles.banner}>
            <h5>Amalex Food</h5>
            <h1>
              Porquê ficar com fome quando <br /> podes encomendar comida ?
            </h1>

            <p>Baixe o nosso aplicativo e desfrute do melhor</p>
            <div className={styles.buttons}>
              <button>Play store</button>
              <button>App store</button>
            </div>
          </div>
        </div>
      </main>
      {/* <div className={styles.phones}>
        <img src='/phones.png' alt='Photos' />
      </div> */}
    </div>
  );
}
