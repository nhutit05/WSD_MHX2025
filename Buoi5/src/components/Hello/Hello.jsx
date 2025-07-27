import styles from './Hello.module.css'
// console.log(styles)
function Hello({children}) {
    return (
        <>
            <header className={styles.abc}>This is a header</header>
            <main>{children}</main>
        </>
    )
}

export default Hello
