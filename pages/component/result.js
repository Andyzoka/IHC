import Link from 'next/link';
import styles from '../../styles/Result.module.css';

function Result(){
    return (
        <div className={styles.resultContainer}>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='uber.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 20,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://www.uber.com'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='99.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 22,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://99app.com/'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='cabify.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 18,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://play.google.com/store/apps/details?id=com.cabify.rider&hl=pt_BR&gl=US'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='maxim.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 16,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://play.google.com/store/apps/details?id=com.taxsee.taxsee&hl=pt_BR&gl=PW'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='inDriver.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 19,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://indriver.com/pt/city'>Ir ao APP</Link>
                </div>
            </div>
            <div className={styles.result}>
                <div className={styles.logoApp}>
                    <img src='urbano.png'/>
                </div>
                <div className={styles.resultContent}>
                    <div className={styles.localContainer}>
                        <span>Origem: Casa</span>
                        <span>Destino: Catedral</span>
                    </div>
                    <span>R$ 25,00</span>
                </div>
                <div className={styles.appLink}>
                    <Link href='https://play.google.com/store/apps/details?id=br.com.urbanonorte.passenger.drivermachine&hl=pt_BR&gl=US'>Ir ao APP</Link>
                </div>
            </div>
        </div>
    )
}

export default Result;




