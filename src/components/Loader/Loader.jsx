import styles from "./styles.module.css"

export function Loader() {
    return(
        <>
            <div className={styles.spinner}>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
                <div className={styles.spinner_blade}></div>
            </div>
        </>
    )
}
