import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="/react.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div class={styles.logo}>
            <img id={styles.logo} src="/logo.jpg"/>
            <span>IHC Transporte</span>
          </div>
          <br/>
          <div class={styles.intro}>
            <span>
              Melhores preços com uma simples pesquisa!
            </span>
            <span>
              Experimente grátis
            </span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.homeButton}>
            <a href="login">Login</a>
          </div>
          <div className={styles.homeButton}>
            <a href="cadastro">Cadastro</a>
          </div>
          <div id={styles.tourButton}>
            <a href="app">Usar sem cadastro</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Projeto IHC 
        </p>
        <p>
          Profº Roberto Michelan
        </p>
      </footer>
    </div>
  )
}
