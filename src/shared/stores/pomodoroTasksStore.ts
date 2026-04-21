import { create } from 'zustand';

interface PomodoroTasks {
  id: number;
  title: string;
  isFinished: boolean;
}

interface PomodoroTasksStore {
  tasks: PomodoroTasks[];

  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export const usePomodoroTasksStore = create<PomodoroTasksStore>((set, get) => ({
  tasks: [
  ],

  addTask: (title) => {
    const { tasks } = get();
    let nextId = -1
    tasks.forEach((task) => {
      if (task.id > nextId) {
        nextId = task.id;
      }
    })
    nextId = nextId + 1;
    set((state) => ({
      tasks: [...state.tasks, {title, isFinished: false, id: nextId}]
    }))
  },
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id)
  })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map((task) => task.id !== id ? task : {...task, isFinished: !task.isFinished})
  }))
}))