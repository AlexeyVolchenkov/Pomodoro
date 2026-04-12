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
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const toggleTimer = () => setIsActive(!isActive);

  const handleAddTask = () => {
    if (inputValue) {
      addTask(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksList}>
        {tasks.map(({ id, title, isFinished }) => (
          <div
            key={id}
            className={styles.taskswrap}
          >
            <div
              className={styles.taskWrapper}
            >
              <input
                type="checkbox"
                id={`${id}-checkbox`}
                checked={isFinished}
                onChange={() => toggleTask(id)}
              />
              <label
                htmlFor={`${id}-checkbox`}
                className={clsx(styles.task, {
                  [styles.finishedTask]: isFinished,
                })}
              >{title}</label>
            </div>
            {isFinished && (
              <div>
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                  type="button"
                  onClick={() => deleteTask(id)}
                >
                  x
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <form
          className={styles.addTask}
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            handleAddTask();
          }}
        >
          <div
            className={styles.inputWrapper}
          >
            <input
              id="taskInput"
              name="taskName"
              className={styles.input}
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            {inputValue && (
              <button
                className={styles.inputButton}
                type="button"
                onClick={() => setInputValue("")}
              >
                x
              </button>
            )}
          </div>
          <Button
            color={'cyan'}
            onClick={() => console.log()}
          >
            Добавить
          </Button>
        </form>
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
