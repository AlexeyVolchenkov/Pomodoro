import TasksList from "@widgets/tasks";
import styles from './Tasks.module.scss'

const Tasks = () => {
  return (
    <div className={styles.container}>
      <TasksList />
    </div>
  )
}
export default Tasks
