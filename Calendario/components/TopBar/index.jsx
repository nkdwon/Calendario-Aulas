import styles from './index.module.css'

export default function Topbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.titulo}>
                    <h1>Agenda Online</h1>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Menu</button>
                        <div className={styles.dropdowncontent}>
                            <a href="">Link 1</a>
                            <a href="">Link 2</a>
                            <a href="">Link 3</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
