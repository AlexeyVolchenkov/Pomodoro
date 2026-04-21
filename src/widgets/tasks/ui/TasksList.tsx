import styles from './TasksList.module.scss'
import Input from "@shared/Input";
import {useState} from "react";
import Button from "@shared/Button";
import {useTasksStore} from "@shared/stores/tasksStore.ts";
import clsx from "clsx";

const TasksList = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const tasks = useTasksStore((state) => state.tasks);
  const currentGroup = useTasksStore((state) => state.currentGroup);
  const groups = useTasksStore((state) => state.groups);
  const setCurrentGroup = useTasksStore((state) => state.setCurrentGroup)
  const addTask = useTasksStore((state) => state.addTask);
  const toggleTask = useTasksStore((state) => state.toggleTask);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const handlerAddTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(inputValue, currentGroup);
    setInputValue('');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.groupWrapper}>
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setCurrentGroup(group)}
            className={clsx({
              [`${styles.activeGroup}`]: group === currentGroup
            })}
          >{group}</button>
        ))}
      </div>
      <div className={styles.taskListWrapper}>
        <form
          className={styles.addTaskContainer}
          action=""
          onSubmit={(event) => handlerAddTask(event)}
        >
          <Input
            placeholder="Добавить задачу"
            inputValue={inputValue}
            setInputValue={setInputValue} />
          <Button
            color={'cyan'}
            onClick={() => console.log()}
          >
            Добавить
          </Button>
        </form>
        <ul>
          {tasks.map(({id, title, isFinished, group}) => (
            <li key={id} className={styles.listItem}>
              <div>
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
                >{title} : {group}</label>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default TasksList
