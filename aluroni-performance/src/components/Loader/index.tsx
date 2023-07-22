import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner_container}>
        <p>Carregando...</p>
        <div className={styles.loading_spinner}></div>
      </div>
    </div>
  );
}
