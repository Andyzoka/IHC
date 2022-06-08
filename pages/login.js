import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="/react.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
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
            <Link href="cadastro">Cadastro</Link>
          </div>
          <div className={styles.homeButton}>
            <Link href="login">Login</Link>
          </div>
        </div>
        <div className={styles.tourButton}>
          <Link href="app">Usar sem cadastro</Link>
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
