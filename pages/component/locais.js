import styles from '../../styles/Locais.module.css'

function getLocais(){
    return (
        <div className={styles.optionContainer}>
            <input type='search' className={styles.searchArea}/>
        </div>
    )
}

export default getLocais;