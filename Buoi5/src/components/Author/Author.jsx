import styles from './Author.module.css'
import Button from '/src/components/Button/Button.jsx'
export default function Author (props) {
    return (
        <>
            <div className={styles.main}>
                <h3 className={styles.name}>{props.name}</h3>
                <p className={styles.city}>{props.city}</p>
                <button className={styles.btn}>Edit</button>
            </div>
        </>
    )
}