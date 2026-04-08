import Timer from "@widgets/timer";
import Tasks from "@widgets/tasks";
import Header from "@widgets/header";
import styles from './Pomodoro.module.scss'

const Pomodoro = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <div className={styles.mainBorder}>
            <Timer />
          </div>
          <div className={styles.mainBorder}>
            <Tasks />
          </div>
        </div>
      </div>
    </>
  )
}
export default Pomodoro
