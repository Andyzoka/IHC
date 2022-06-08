import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="../public/react.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
            <span>IHC Transporte</span>
          </div>
          <br/>
          <div className={styles.intro}>
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
            <Link href="login">Login</Link>
          </div>
          <div className={styles.homeButton}>
            <Link href="cadastro">Cadastro</Link>
          </div>
          <div itemID={styles.tourButton}>
            <Link href="app">Usar sem cadastro</Link>
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
