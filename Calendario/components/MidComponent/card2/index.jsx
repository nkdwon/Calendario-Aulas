import styles from "./index.module.css"
export default function Card2() {
  return (
    <>
        <div className= {styles.container}>
            <div className= {styles.titulo}>
              <h1>Cadastro de Disciplina</h1>
              <div className={styles.inside}>
                <input type="text" name=""/>
                <button>Cadastrar</button>
              </div>
            </div>
        </div>
    </>
  )
}
