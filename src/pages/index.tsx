import Head from 'next/head';
import Link from 'next/link';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

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
      <div className={styles.phones}>
        <img src='/phones1.png' alt='Photos' />
      </div>

      <div className={styles.line}></div>

      <div className={styles.secondBanner}>
        <h1>Como o aplicativo funciona</h1>
        <div>
          <img src='/login.png' alt='Login example' />
          <div className={styles.description}>
            <h5>Cria um conta</h5>
            <p>
              Criar/entrar em uma conta <br /> existente para começar.
            </p>
            <small>
              Uma conta é criada com o teu email <br /> e uma senha desejada.
            </small>
          </div>
        </div>
      </div>

      <div className={styles.secondBanner}>
        <div>
          <div className={styles.description}>
            <h5>Explora variedades</h5>
            <p>
              Compre suas refeições <br /> favoritas como e dey quente.
            </p>
            <small>
              Compre suas refeições ou bebidas <br /> favoritas e aproveite ao
              fazê-lo.
            </small>
          </div>

          <img src='/explore.png' alt='Login example' />
        </div>
      </div>

      <div className={styles.secondBanner}>
        <div>
          <img src='/payment.png' alt='Login example' />

          <div className={styles.description}>
            <h5>Pagamento</h5>
            <p>
              Quando você terminar <br /> de verificar e entregue.
            </p>
            <small>
              Quando terminar, verifique e compre <br />
              entregue com facilidade.
            </small>
          </div>
        </div>
      </div>

      <footer className={styles.content}>
        <div
          className={`${styles.banner} ${styles.footerImg} ${styles.footerContent}`}
        >
          <h1>Baixe o aplicativo agora</h1>

          <p>
            Disponível na sua loja favorita. Começa a sua experiência premium
            agora
          </p>
          <div className={`${styles.buttons} ${styles.footerButtons}`}>
            <button>Play store</button>
            <button>App store</button>
          </div>
        </div>

        <div className={`${styles.header} ${styles.footerEnd}`}>
          <Link href='/'>
            <img src='/logo.svg' alt='Logo' />
          </Link>
          <ul>
            <li>
              <Link href='/'>
                <a className={`${styles.links} ${styles.active}`}>
                  <FiFacebook color='#fa4a0c' size={20} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/product'>
                <a className={styles.links}>
                  <FiTwitter color='#fa4a0c' size={20} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/faq'>
                <a className={styles.links}>
                  <FiInstagram color='#fa4a0c' size={20} />
                </a>
              </Link>
            </li>
          </ul>
          <p>Copyright &copy; {new Date().getFullYear()} Amalex Food</p>
        </div>
      </footer>
    </div>
  );
}
