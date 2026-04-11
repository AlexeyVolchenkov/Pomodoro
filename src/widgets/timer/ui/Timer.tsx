import Tile from "@shared/Tile";
import styles from './Timer.module.scss'
import {useEffect} from "react";
import {useTimerStore} from "@shared/stores/timerStore.ts";

const RADIUS = 120;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Timer = () => {
  const totalTime = useTimerStore(state => state.totalTime)
  const timer = useTimerStore(state => state.timer)
  const isActive = useTimerStore(state => state.isActive)
  const formatedTime = useTimerStore(state => state.formatedTime)
  const currentMode = useTimerStore(state => state.currentMode)
  const nextMode = useTimerStore(state => state.nextMode)
  const switchMode = useTimerStore(state => state.switchMode)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        useTimerStore.setState((state) => {
          if (state.timer <= 1) {
            switchMode(nextMode, currentMode);
            return {}
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
  const offset = CIRCUMFERENCE - (timer / totalTime) * CIRCUMFERENCE;

  return (
    <>
      <div className={styles.infoMode}>
        <h2>Текущий режим</h2>
        <Tile color={currentMode === 'Фокус' ? 'lime' : 'cyan'}>{currentMode}</Tile>
      </div>
      <div className={styles.infoMode}>
        <h2>Следующий режим</h2>
        <Tile color={nextMode === 'Перерыв' ? 'cyan' : 'lime'}>{nextMode}</Tile>
      </div>
      <div className={styles.timer}>
        <svg className={styles.circle} viewBox="0 0 300 300">
          <circle
            className={styles.circleBackground}
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
    </>
  )
}
export default Timer
