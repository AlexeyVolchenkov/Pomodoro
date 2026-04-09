import {useTimerStore} from "@shared/stores/timerStore.ts";
import {useTasksStore} from "@shared/stores/tasksStore.ts";
import Button from "@shared/Button";
import styles from './Tasks.module.scss'
import {useState} from "react";

const Tasks = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const isActive = useTimerStore((state) => state.isActive);
  const setIsActive = useTimerStore((state) => state.setIsActive);
  const tasks = useTasksStore((state) => state.tasks);
  const addTask = useTasksStore((state) => state.addTask);

  const toggleTimer = () => setIsActive(!isActive);

  const handleAddTask = () => {
    addTask(inputValue);
    setInputValue("");
  }

  return (
    <div className={styles.tasks}>
      <div>
        <div className={styles.tasksList}>
          {tasks.map((task) => (
            <span key={task}>{task}</span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.addTask}>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>
        <Button
          onClick={toggleTimer}
          color={isActive ? 'cyan' : 'lime'}
        >
          {isActive ? "Стоп" : "Старт"}
        </Button>
      </div>
    </div>
  )
}
export default Tasks
