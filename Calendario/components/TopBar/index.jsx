import styles from './index.module.css'
import Link from 'react-router-dom'

export default function Topbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.titulo}>
                    <h1>Agenda Online</h1>

                    <div className={styles.dropdown}>
                        <button className={styles.dropbtn}>Menu</button>
                        <div className={styles.dropdowncontent}>
                            <Link href="">Cadastrar Aulas</Link>
                            <Link  href="">Cadastrar Horários</Link>
                            <Link href="">Calendário</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
