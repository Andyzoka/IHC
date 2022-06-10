import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Login() {
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
        </div>
      </main>
    </div>
  )
}
