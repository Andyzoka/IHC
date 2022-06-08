import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Register.module.css'

export default function Cadastro() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IHC Transporte</title>
        <link rel="icon" href="/react.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image itemID={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
          <span>IHC Transporte</span>
          <br/>
          <span>
            Cadastro
          </span>
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
