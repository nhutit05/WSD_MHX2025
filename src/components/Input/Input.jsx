import styles from './Input.module.css'

function Input({ pld}) {
    return (
        <>
            <input type='text' name = 'input' placeholder={pld} className={styles.input}/>
        </>
    )
}

export default Input