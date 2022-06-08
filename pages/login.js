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
          <img id={styles.logo} src="/logo.jpg"/>
          <span>IHC Transporte</span>
          <br/>
          <span>
            Melhores preços com uma simples pesquisa!
          </span>
          <span>
            Experimente grátis
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.homeButton}>
            <a href="cadastro">Cadastro</a>
          </div>
          <div className={styles.homeButton}>
            <a href="login">Login</a>
          </div>
        </div>
        <div className={styles.tourButton}>
          <a href="app">Usar sem cadastro</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Projeto para o curso de IHC 
        </p>
        <p>
          Professor Roberto Michelan
        </p>
      </footer>
    </div>
  )
}
