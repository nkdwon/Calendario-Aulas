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
                            <a href="">Cadastrar Aulas</a>
                            <a href="">Cadastrar Horários</a>
                            <a href="">Calendário</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
