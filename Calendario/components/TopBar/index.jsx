import styles from './index.module.css'

export default function Topbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.titulo}>
                    <h1>Agenda Online</h1>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
