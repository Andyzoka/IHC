import styles from '../../styles/Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
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
    );
}

export default Footer;