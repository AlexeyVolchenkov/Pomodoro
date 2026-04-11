import {useState} from "react";
import {useTimerStore} from "@shared/stores/timerStore.ts";
import {useTasksStore} from "@shared/stores/tasksStore.ts";
import clsx from 'clsx'
import Button from "@shared/Button";
import styles from './Tasks.module.scss'

const Tasks = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const isActive = useTimerStore((state) => state.isActive);
  const setIsActive = useTimerStore((state) => state.setIsActive);
  const tasks = useTasksStore((state) => state.tasks);
  const addTask = useTasksStore((state) => state.addTask);
  const toggleTask = useTasksStore((state) => state.toggleTask);

  const toggleTimer = () => setIsActive(!isActive);

  const handleAddTask = () => {
    addTask(inputValue);
    setInputValue("");
  }

  return (
    <div className={styles.tasks}>
      <div>
        <div className={styles.tasksList}>
          {tasks.map(({ title, isFinished }) => (
            <div
              key={title}
              className={styles.taskWrapper}
            >
              <input
                type="checkbox"
                id={`${title}-checkbox`}
                checked={isFinished}
                onChange={() => toggleTask(title)}
              />
            <label
              htmlFor={`${title}-checkbox`}
              className={clsx(styles.task, {
                [styles.finishedTask]: isFinished,
              })}
            >{title}</label>
            </div>
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
          <Button
            color={'cyan'}
            onClick={handleAddTask}
          >
            Добавить
          </Button>
        </div>
        <Button
          color={isActive ? 'cyan' : 'lime'}
          onClick={toggleTimer}
        >
          {isActive ? "Стоп" : "Старт"}
        </Button>
      </div>
    </div>
  )
}
export default Tasks
