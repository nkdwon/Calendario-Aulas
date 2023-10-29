import styles from './index.module.css'

export default function Topbar() {
    return (
        <>
            <div className= {styles.navbar}>
                <div className= {styles.titulo}>
                    <h1>Agenda Online</h1>
                    <a>Pedro Costa, Felipe Barros, Matheus Amaral, Bernardo Alves</a>
                </div>
            </div>
        </>
    )
}
