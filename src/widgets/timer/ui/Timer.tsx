import Tile from "@shared/Tile";
import styles from './Timer.module.scss'
import {useEffect, useState} from "react";

const Timer = () => {
  const [timer, setTimer] = useState(299);
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevState) => {
          if (prevState <= 1) {
            setIsActive(false);
            return 0
          } else {
            return prevState - 1
          }
        })
      }, 1000)
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const toggleTimer = () => setIsActive(!isActive);

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
          {`${Math.floor(timer / 60)}`.padStart(2, '0')}:{`${Math.floor(timer % 60)}`.padStart(2, '0')}
          <button
            onClick={toggleTimer}
          >timer</button>
        </div>
      </div>
    </div>
  )
}
export default Timer
