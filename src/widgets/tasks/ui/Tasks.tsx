import {useTimerStore} from "@shared/stores/timerStore.ts";
import Button from "@shared/Button";

const Tasks = () => {
  const isActive = useTimerStore((state) => state.isActive)
  const setIsActive = useTimerStore((state) => state.setIsActive)

  const toggleTimer = () => setIsActive(!isActive)

  return (
    <div>
      <Button
        onClick={toggleTimer}
        color={isActive ? 'cyan' : 'lime'}
      >
        {isActive ? "Стоп" : "Старт"}
      </Button>
    </div>
  )
}
export default Tasks
