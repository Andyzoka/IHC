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
                    Thauer Furtado, Anderson Medeiros, Izabela Granado, Felipe Dias, Geovanna Cardoso da Silva
                </p>
            </footer>
        </div>
    );
}

export default Footer;
