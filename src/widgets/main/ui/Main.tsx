import styles from "./Main.module.scss";
import Timer from "@widgets/timer";
import MainCard from "@features/MainCard";
import PomodoroTasks from "@widgets/pomodoroTasks";

const Main = () => {
  return (
    <>
      <div className={styles.mainBorder}>
        <MainCard
          title="Текущий сеанс"
          subTitle="Следите за циклами"
        >
          <Timer />
        </MainCard>
      </div>
      <div className={styles.mainBorder}>
        <MainCard
          title="Список задач"
          subTitle="Ваши задачи на текущую сессию"
        >
          <PomodoroTasks />
        </MainCard>
      </div>
    </>
  )
}
export default Main
