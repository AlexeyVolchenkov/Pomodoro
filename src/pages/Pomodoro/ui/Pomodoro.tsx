import Header from "@widgets/header";
import styles from './Pomodoro.module.scss';
import Main from "@widgets/main";

const Pomodoro = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </>
  )
}
export default Pomodoro
