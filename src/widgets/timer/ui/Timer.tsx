import Tile from "@shared/Tile";
import styles from './Timer.module.scss'
import {useEffect} from "react";
import {useTimerStore} from "@shared/stores/timerStore.ts";

const TOTAL_TIME = 1500;
const RADIUS = 120;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Timer = () => {
  const timer = useTimerStore(state => state.timer)
  const isActive = useTimerStore(state => state.isActive)
  const formatedTime = useTimerStore(state => state.formatedTime)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        useTimerStore.setState((state) => {
          if (state.timer <= 1) {
            return { timer: 0, isActive: false }
          } else {
            return { timer: state.timer - 1 }
          }
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timer]);
  const offset = CIRCUMFERENCE - (timer / TOTAL_TIME) * CIRCUMFERENCE;

  return (
    <div >
      <div className={styles.header}>
        <h2 className={styles.title}>Текущий сеанс</h2>
        <h3>Следите за циклами</h3>
      </div>
      <div className={styles.main}>
        <div className={styles.infoMode}>
          <h2>Текущий режим</h2>
          <Tile color='lime'>Фокус</Tile>
        </div>
        <div className={styles.infoMode}>
          <h2>Следующий режим</h2>
          <Tile color='cyan'>Пауза</Tile>
        </div>
        <div className={styles.timer}>
          <svg className={styles.svgRing} viewBox="0 0 300 300">
            <circle
              className={styles.circleBg}
              cx="150" cy="150" r={RADIUS}
            />
            <circle
              className={styles.circleProgress}
              cx="150" cy="150" r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>
          {formatedTime()}
        </div>
      </div>
    </div>
  )
}
export default Timer
