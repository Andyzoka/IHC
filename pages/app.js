import Head from 'next/head'
import styles from '../styles/App.module.css'

import { useState} from 'react';

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <Head>
                <title>IHC Transporte</title>
                <link rel="icon" href="/react.ico" />
            </Head>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a href='/'>
                        <img id={styles.logo} src="/logo.jpg" alt='carro com uma lupa sobrepondo tudo em azul claro'/>
                        <span>IHC Transporte</span>
                    </a>
                </div>
                <div className={styles.search}>
                    <form className={styles.form}>
                        <label name='origem'>Comece por digitar o <span>local de origem</span></label>
                        <input name='origem' type='text' placeholder='R. Alexandra, 91 - Parque Res. PatriciaMaringá - PR, 87040-460'/>
                        <label name='destino'>Em seguida digite o <span>local de destino</span></label>
                        <input name='destino' type='text' placeholder='Praça da Catedral, s/n - Zona 02, Maringá - PR, 87010-530'/>
                    </form>
                </div>
            </div>
            <main className={styles.main}>
                <div className={styles.result}>
                    teste
                </div>
            </main>
            <footer>
                <p>
                    Projeto IHC 
                </p>
                <p>
                    Profº Roberto Michelan
                </p>
                <p>
                    Alunos:
                </p>
            </footer>
        </div>
    )
}